import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children?: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    <div className="mb-8 flex justify-center transition-transform duration-300 hover:scale-105">
      {props.logo}
    </div>

    {props.children && (
      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        {props.children}
      </div>
    )}

    {props.iconList && (
      <div className="mb-10 flex justify-center gap-6 text-base">
        {props.iconList}
      </div>
    )}

    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-6 shadow-inner ring-1 ring-gray-200/50 sm:px-12 sm:py-8">
      <div className="text-sm text-gray-600">
        <FooterCopyright />
      </div>
    </div>
  </div>
);

export { CenteredFooter };
