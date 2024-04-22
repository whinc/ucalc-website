import className from 'classnames';
import { useRouter } from 'next/router';

import { pages } from '@/templates/pages';

// 优先读取 pageId，如果没有则读取 title 和 image
type IVerticalFeatureRowProps = {
  pageId?: keyof typeof pages;
  title?: string;
  image?: string;
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
        {/* FIXME: github actions 部署后，screenshots 图片后缀变成了大写，导致图片加载不出来，暂时手动转换下 */}
        {pageId && (
          <img
            src={`${router.basePath}/assets/screenshots/${pageId}_light.png`}
            alt={`${pages[pageId].title}截图`}
            loading="lazy"
          />
        )}
        {image && (
          <img
            src={`${router.basePath}/assets/screenshots/${image}.png`}
            alt={`${title}截图`}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
