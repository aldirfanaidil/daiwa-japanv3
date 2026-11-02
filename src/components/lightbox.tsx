import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { LText } from "@/lib/i18n";

export type GalleryImage = {
  src: string;
  title: LText;
  caption: LText;
};

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onNavigate]);

  if (index === null) return null;
  const img = images[index] ?? images[0];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 md:p-12"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        className="absolute right-6 top-6 rounded-full p-2 text-foreground/70 transition-colors hover:text-foreground"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="h-7 w-7" />
      </button>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-foreground/60 transition-colors hover:text-foreground md:left-10"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        aria-label="Previous"
      >
        <ChevronLeft className="h-9 w-9" />
      </button>

      <figure
        className="max-h-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.title.ja}
          className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl"
        />
        <figcaption className="mt-5 text-center">
          <p className="font-display text-lg text-foreground">{img.title.ja}</p>
          <p className="mt-1 text-sm text-muted-foreground">{img.caption.ja}</p>
        </figcaption>
      </figure>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-foreground/60 transition-colors hover:text-foreground md:right-10"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        aria-label="Next"
      >
        <ChevronRight className="h-9 w-9" />
      </button>
    </div>
  );
}
