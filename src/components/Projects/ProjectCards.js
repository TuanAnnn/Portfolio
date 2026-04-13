import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = (e) => { e.stopPropagation(); setCurrent((current - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setCurrent((current + 1) % images.length); };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  return (
    <div onClick={onClose} style={overlayStyle}>
      <div onClick={(e) => e.stopPropagation()} style={lightboxStyle}>
        {/* Close */}
        <button onClick={onClose} style={closeBtn}>✕</button>

        {/* Counter */}
        <div style={counter}>{current + 1} / {images.length}</div>

        {/* Image */}
        <img src={images[current].src} alt={current}
          style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: 10, objectFit: "contain" }} />

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button onClick={prev} style={{ ...lightboxArrow, left: -20 }}>‹</button>
            <button onClick={next} style={{ ...lightboxArrow, right: -20 }}>›</button>
          </>
        )}

        {/* Dot nav */}
        {images.length > 1 && (
          <div style={{ display: "flex", gap: 6, marginTop: 14, justifyContent: "center" }}>
            {images.map((_, i) => (
              <span key={i} onClick={() => setCurrent(i)} style={{
                width: 7, height: 7, borderRadius: "50%", cursor: "pointer",
                background: i === current ? "#c770f0" : "rgba(255,255,255,0.3)",
                transition: "all 0.2s",
              }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCards(props) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [archOpen, setArchOpen] = useState(false);
  const screenshots = props.screenshots || [];

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />

        <Card.Body style={{ textAlign: "left" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text as="div">
            {Array.isArray(props.description) ? (
              <ul style={{ paddingLeft: "18px", marginBottom: "16px" }}>
                {props.description.map((point, i) => (
                  <li key={i} style={{ marginBottom: "4px" }}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{props.description}</p>
            )}
          </Card.Text>

          {props.techStack && (
            <div className="project-tech-stack">
              {props.techStack.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          )}

          {/* Architecture */}
          {props.architecture && (
            <div style={{ marginTop: 14 }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 8, fontWeight: 700, letterSpacing: 0.8 }}>
                ARCHITECTURE
              </p>
              <div onClick={() => setArchOpen(true)} style={{ ...thumbWrapper, width: "100%", height: 80 }}>
                <img src={props.architecture} alt="architecture" style={{ ...thumbImg, objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>Click to view</span>
                </div>
              </div>
            </div>
          )}

          {/* Thumbnails */}
          {screenshots.length > 0 && (
            <div style={{ marginTop: 14 }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 8, fontWeight: 700, letterSpacing: 0.8 }}>
                SCREENSHOTS
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {screenshots.map((img, i) => (
                  <div key={i} onClick={() => setLightboxIndex(i)} style={thumbWrapper}>
                    <img src={img.src} alt={i} style={thumbImg} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Lightbox screenshots */}
      {lightboxIndex !== null && (
        <Lightbox images={screenshots} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}

      {/* Lightbox architecture */}
      {archOpen && props.architecture && (
        <Lightbox images={[{ src: props.architecture, label: "Architecture" }]} startIndex={0} onClose={() => setArchOpen(false)} />
      )}
    </>
  );
}

const thumbWrapper = {
  position: "relative", width: 60, height: 60,
  borderRadius: 8, overflow: "hidden", cursor: "pointer",
  border: "1px solid rgba(199,112,240,0.3)",
  transition: "transform 0.15s, border-color 0.15s",
};

const thumbImg = {
  width: "100%", height: "100%", objectFit: "cover",
  transition: "opacity 0.15s",
};

const moreOverlay = {
  position: "absolute", inset: 0,
  background: "rgba(0,0,0,0.6)",
  color: "#fff", fontSize: 14, fontWeight: 700,
  display: "flex", alignItems: "center", justifyContent: "center",
};

const overlayStyle = {
  position: "fixed", inset: 0, zIndex: 9999,
  background: "rgba(0,0,0,0.88)",
  display: "flex", alignItems: "center", justifyContent: "center",
  backdropFilter: "blur(6px)",
};

const lightboxStyle = {
  position: "relative",
  display: "flex", flexDirection: "column", alignItems: "center",
  padding: "24px 40px 20px",
  maxWidth: "90vw",
};

const closeBtn = {
  position: "absolute", top: -4, right: -4,
  background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff", borderRadius: "50%", width: 32, height: 32,
  fontSize: 14, cursor: "pointer", lineHeight: "30px", textAlign: "center", padding: 0,
};

const counter = {
  color: "rgba(255,255,255,0.5)", fontSize: 12,
  marginBottom: 12, alignSelf: "flex-end",
};

const lightboxArrow = {
  position: "absolute", top: "45%", transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff", borderRadius: "50%", width: 36, height: 36,
  fontSize: 22, lineHeight: "34px", textAlign: "center",
  cursor: "pointer", padding: 0,
};

export default ProjectCards;
