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
            className="mt-6 text-xl leading-9"
            src={`${router.basePath}${props.qrcode}`}
            alt={props.qrcodeAlt ?? `${props.title}小程序码`}
          />
        )}
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt ?? `${props.title}截图`}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
