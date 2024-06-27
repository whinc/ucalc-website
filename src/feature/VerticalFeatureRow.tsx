import className from 'classnames';
import { useRouter } from 'next/router';

import { pages } from '@/templates/pages';

// 优先读取 pageId，如果没有则读取 title 和 image
type IVerticalFeatureRowProps = {
  pageId?: keyof typeof pages;
  title?: string;
  /**
   * 支持自定义图片，当 pageId 缺省时生效，图片填写相对 public/assets/screenshots 的路径即可，例如 theme_light.png
   * 如果传入两个链接，则分别对应 light 和 dark 主题
   */
  image?: string | [string, string];
  description?: string;
  reverse?: boolean;
};

const VerticalFeatureRow = ({
  pageId,
  title,
  image,
  description,
  reverse,
}: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">
          {pageId ? pages[pageId].title : title}
        </h3>
        <div className="mt-6 text-xl leading-9">{description}</div>
        {pageId && (
          <img
            className="m-auto mt-6 text-xl leading-9"
            src={`${router.basePath}/assets/screenshots/${pageId}_qrcode.png`}
            alt={`${pages[pageId].title}小程序`}
            loading="lazy"
          />
        )}
      </div>

      <div className="w-full p-6 sm:w-1/2">
        {pageId && (
          <div className="relative">
            <img
              src={`${router.basePath}/assets/screenshots/${pageId}_dark.png`}
              alt={`${pages[pageId].title}截图`}
              loading="lazy"
              className="absolute"
            />
            <img
              src={`${router.basePath}/assets/screenshots/${pageId}_light.png`}
              alt={`${pages[pageId].title}截图`}
              loading="lazy"
              className="relative animate-toggle"
            />
          </div>
        )}
        {image && Array.isArray(image) && (
          <div className="relative">
            <img
              src={`${router.basePath}/assets/screenshots/${image[1]}`}
              alt={`${title}截图`}
              loading="lazy"
              className="absolute"
            />
            <img
              src={`${router.basePath}/assets/screenshots/${image[0]}`}
              alt={`${title}截图`}
              loading="lazy"
              className="relative animate-toggle"
            />
          </div>
        )}
        {image && typeof image === 'string' && (
          <img
            src={`${router.basePath}/assets/screenshots/${image}`}
            alt={`${title}截图`}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
