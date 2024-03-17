import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  qrcode?: string;
  qrcodeAlt?: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        {props.qrcode && (
          <img
            className="m-auto mt-6 text-xl leading-9"
            src={`${router.basePath}${props.qrcode}`}
            alt={props.qrcodeAlt ?? `${props.title}小程序`}
            loading="lazy"
          />
        )}
      </div>

      <div className="w-full p-6 sm:w-1/2">
        {/* FIXME: github actions 部署后，screenshots 图片后缀变成了大写，导致图片加载不出来，暂时手动转换下 */}
        <img
          src={`${router.basePath}${props.image.replace(/png$/, 'PNG')}`}
          alt={props.imageAlt ?? `${props.title}`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
