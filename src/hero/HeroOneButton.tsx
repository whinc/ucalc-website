import type { ReactNode } from "react";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button?: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full bg-gradient-to-r from-primary-50 to-blue-50 px-6 py-3 text-sm font-semibold text-primary-700 shadow-md ring-1 ring-primary-200/50 backdrop-blur-sm">
      <svg
        className="size-5 animate-pulse"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span>100+ 实用工具，持续更新中</span>
    </div>

    <h1 className="animate-scale-in whitespace-pre-line bg-gradient-to-br from-primary-600 via-primary-500 to-blue-500 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl">
      {props.title}
    </h1>

    <div
      className="mx-auto mt-8 max-w-2xl animate-fade-in text-xl text-gray-600 sm:text-2xl"
      style={{ animationDelay: "0.2s" }}
    >
      {props.description}
    </div>

    {props.button && (
      <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        {props.button}
      </div>
    )}
  </header>
);

export { HeroOneButton };
