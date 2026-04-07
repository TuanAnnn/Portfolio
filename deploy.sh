#!/bin/bash
# ============================================================
# deploy.sh — Deploy portfolio len VPS thu cong
# Yeu cau: .env.deploy da duoc tao (xem .env.deploy.example)
# ============================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Load .env.deploy
ENV_FILE="${SCRIPT_DIR}/.env.deploy"
if [[ ! -f "$ENV_FILE" ]]; then
  echo "Loi: khong tim thay .env.deploy"
  echo "Tao file tu mau: cp .env.deploy.example .env.deploy"
  exit 1
fi
set -a; source "$ENV_FILE"; set +a

echo "==> [1/5] Build React app..."
npm ci
npm run build

echo "==> [2/5] Tao thu muc tren VPS neu chua co..."
ssh -p "${VPS_PORT}" "${VPS_USER}@${VPS_HOST}" "mkdir -p ${APP_DIR}/build"

echo "==> [3/5] Day build len VPS..."
rsync -avz --delete \
  -e "ssh -p ${VPS_PORT}" \
  --exclude='node_modules' \
  ./build/ "${VPS_USER}@${VPS_HOST}:${APP_DIR}/build/"

echo "==> [4/5] Copy ecosystem.config.js len VPS..."
rsync -avz \
  -e "ssh -p ${VPS_PORT}" \
  ecosystem.config.js "${VPS_USER}@${VPS_HOST}:${APP_DIR}/"

echo "==> [5/5] Khoi dong / reload PM2..."
ssh -p "${VPS_PORT}" "${VPS_USER}@${VPS_HOST}" \
  APP_PORT="${APP_PORT}" APP_NAME="${APP_NAME}" APP_DIR="${APP_DIR}" \
  bash << 'EOF'
  set -e
  cd "${APP_DIR}"

  if ! command -v serve &> /dev/null; then
    npm install -g serve
  fi

  if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    pm2 startup systemd -u "$(whoami)" --hp "$HOME"
  fi

  if pm2 list | grep -q "${APP_NAME}"; then
    pm2 reload ecosystem.config.js --env production
  else
    pm2 start ecosystem.config.js --env production
  fi

  pm2 save
EOF

echo ""
echo "Deploy thanh cong! http://${VPS_HOST}:${APP_PORT}"
