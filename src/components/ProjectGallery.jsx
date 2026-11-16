import { useEffect, useId, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import './ProjectGallery.css';

export default function ProjectGallery({ screens, projectName }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dialogRef = useRef(null);
  const titleId = useId();
  const isOpen = selectedIndex !== null;
  const selectedScreen = isOpen ? screens[selectedIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  const changeScreen = (direction) => {
    setSelectedIndex((current) => (current + direction + screens.length) % screens.length);
  };

  return (
    <div className="project-gallery">
      <div className="project-gallery__grid">
        {screens.map((screen, index) => (
          <figure className="project-gallery__screen" key={screen.src}>
            <button
              type="button"
              className="project-gallery__preview"
              aria-label={`Ampliar ${screen.title} do ${projectName}`}
              aria-haspopup="dialog"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                width={screen.width}
                height={screen.height}
                loading="lazy"
                decoding="async"
              />
              <span className="project-gallery__expand" aria-hidden="true"><Maximize2 size={16} /></span>
            </button>
            <figcaption className="project-gallery__caption">
              <span>{screen.title}</span>
              <span className="project-gallery__description">{screen.description}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="project-gallery__dialog"
        aria-labelledby={titleId}
        data-lenis-prevent="true"
        onClose={() => setSelectedIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            changeScreen(event.key === 'ArrowRight' ? 1 : -1);
          }
        }}
      >
        <div className="project-gallery__viewer">
          <div className="project-gallery__toolbar">
            <h3 id={titleId}>{projectName} <span>/ {selectedScreen?.title}</span></h3>
            <button type="button" onClick={() => setSelectedIndex(null)} aria-label="Fechar imagem ampliada">
              <X size={22} />
            </button>
          </div>
          {selectedScreen && <img className="project-gallery__full-image" src={selectedScreen.src} alt={selectedScreen.alt} />}
          <div className="project-gallery__navigation">
            <button type="button" onClick={() => changeScreen(-1)} aria-label="Imagem anterior"><ArrowLeft size={20} /></button>
            <p aria-live="polite">{selectedScreen?.title} <span>{(selectedIndex ?? 0) + 1} / {screens.length}</span></p>
            <button type="button" onClick={() => changeScreen(1)} aria-label="Próxima imagem"><ArrowRight size={20} /></button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
