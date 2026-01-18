import Link from "next/link";
import type { ReactNode } from "react";

type INavbarProps = {
  logo: ReactNode;
  children?: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="fixed inset-x-4 top-4 z-50">
    <div className="mx-auto max-w-7xl">
      <div className="rounded-2xl bg-white/80 shadow-lg ring-1 ring-gray-900/5 backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-xl">
        <div className="flex flex-wrap items-center justify-between px-6 py-4 sm:px-8">
          <div className="transition-transform duration-300 hover:scale-105">
            <Link href="/" className="block">
              {props.logo}
            </Link>
          </div>

          {props.children && (
            <nav>
              <ul className="flex items-center gap-6 text-base font-medium text-gray-700 sm:gap-8">
                {props.children}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  </div>
);

export { NavbarTwoColumns };
