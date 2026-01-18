import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">{props.title}</h2>
        )}
        {props.description && (
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
            {props.description}
          </p>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
