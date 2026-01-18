import { useEffect } from "react";
import { createPortal } from "react-dom";

type ImageModalProps = {
  isOpen: boolean;
  imageSrc: string;
  alt: string;
  onClose: () => void;
};

const ImageModal = ({ isOpen, imageSrc, alt, onClose }: ImageModalProps) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-h-[85vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-14 -top-14 z-10 flex size-10 items-center justify-center rounded-full bg-white/90 text-gray-900 transition-all hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="关闭图片查看器"
        >
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <img
          src={imageSrc}
          alt={alt}
          className="size-auto max-h-[85vh] max-w-full animate-scale-in rounded-lg object-contain shadow-2xl"
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            target.classList.remove("opacity-0");
          }}
        />
      </div>
    </div>
  );

  return createPortal(
    modalContent,
    document.getElementById("__next_portal") || document.body,
  );
};

export { ImageModal };
