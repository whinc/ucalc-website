import { useState } from 'react';
import { useRouter } from 'next/router';
import { pages } from '@/templates/pages';
import { ImageModal } from '@/components/ImageModal';

type IFeatureCardProps = {
  pageId?: keyof typeof pages;
  title?: string;
  description?: string;
  image?: string | [string, string];
};

const FeatureCard = ({
  pageId,
  title,
  image,
  description,
}: IFeatureCardProps) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getTitle = () => {
    if (pageId) {
      return pages[pageId]?.title || title;
    }
    return title;
  };

  const getImageSrc = () => {
    if (pageId) {
      return `${router.basePath}/assets/screenshots/${pageId}_light.png`;
    }
    if (image && typeof image === 'string') {
      return `${router.basePath}/assets/screenshots/${image}`;
    }
    return '';
  };

  const handleImageClick = () => {
    const src = getImageSrc();
    if (src && !imageError) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium cursor-pointer">
      <div
        className="mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer"
        onClick={handleImageClick}
        role="button"
        tabIndex={0}
        aria-label={`查看${getTitle()}大图`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleImageClick();
          }
        }}
      >
        {pageId || (image && typeof image === 'string') ? (
          imageError ? (
            <div className="min-h-48 w-full flex items-center justify-center p-6">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-2 font-medium text-gray-700">{getTitle()}</p>
                <p className="text-sm text-gray-500 mt-1">截图加载中</p>
              </div>
            </div>
          ) : (
            <img
              src={getImageSrc()}
              alt={`${getTitle()}截图`}
              loading="lazy"
              className="min-h-48 w-full object-contain"
              onError={() => setImageError(true)}
            />
          )
        ) : null}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-gray-900">{getTitle()}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={getImageSrc()}
        alt={`${getTitle()}截图`}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export { FeatureCard };
