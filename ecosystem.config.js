const {
  VPS_USER = 'ubuntu',
  VPS_HOST = '',
  VPS_PORT = '22',
  APP_DIR = '/home/portfolio',
  APP_NAME = 'portfolio',
  APP_PORT = '3000',
  BRANCH = 'master',
  GH_REPO = '',
} = process.env;

module.exports = {
  apps: [
    {
      name: APP_NAME,
      script: 'npx',
      args: `serve -s build -l ${APP_PORT}`,
      cwd: APP_DIR,
      interpreter: 'none',
      env: {
        NODE_ENV: 'production',
      },
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
    },
  ],

  deploy: {
    production: {
      user: VPS_USER,
      host: VPS_HOST,
      port: VPS_PORT,
      ref: `origin/${BRANCH}`,
      repo: GH_REPO,
      path: APP_DIR,
      'post-deploy':
        'npm ci && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
