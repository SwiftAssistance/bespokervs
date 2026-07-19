import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '../config/site';

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = (e) => { e?.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); };
  const next = (e) => { e?.stopPropagation(); setIndex((i) => (i + 1) % images.length) };

  const handleKeyDown = useCallback((e) => {
    if (!lightbox) return;
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') setLightbox(false);
  }, [lightbox, index]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      {/* Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 group">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <img
              src={img.src}
              srcSet={img.srcSet}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              width={1200}
              height={900}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              alt={img.alt}
              className="w-full h-full object-cover cursor-zoom-in"
              onClick={() => setLightbox(true)}
            />
          </div>
        ))}

        {/* Click to enlarge overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          <div className="bg-black/60 text-white flex items-center gap-2 px-5 py-3 rounded text-sm font-medium tracking-wide">
            <ZoomIn size={18} />
            Click to enlarge
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-dark p-3 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-dark p-3 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === index ? 'bg-white w-5' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-10 mt-6">
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-primary-dark hover:text-accent-gold transition-colors"
        >
          <Instagram size={22} strokeWidth={1.5} />
          <span className="text-xs text-gray-500">{siteConfig.social.instagram.replace('https://www.', '').replace('https://', '')}</span>
        </a>
        <a
          href={siteConfig.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-primary-dark hover:text-accent-gold transition-colors"
        >
          <Facebook size={22} strokeWidth={1.5} />
          <span className="text-xs text-gray-500">{siteConfig.social.facebook.replace('https://www.', '').replace('https://', '')}</span>
        </a>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 bg-white text-black hover:bg-gray-200 p-2 rounded-full shadow-lg"
          >
            <X size={24} />
          </button>

          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[index].src}
              srcSet={images[index].srcSet}
              sizes="90vw"
              alt={images[index].alt}
              className="max-w-full max-h-[90vh] object-contain select-none"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4"
              >
                <ChevronRight size={28} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {index + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
