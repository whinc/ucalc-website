import Image from "next/image";
import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => {
  return (
    <Background color="bg-gradient-to-br from-gray-50 to-gray-100">
      <Section yPadding="pt-28 pb-6 sm:pt-32">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li className="inline-flex flex-row items-center">
            <Link
              href="https://github.com/whinc/ucalc-website"
              target={"_blank"}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-gray-700 transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 hover:shadow-md"
            >
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/whinc/ucalc-website/issues/new"
              target={"_blank"}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-gray-700 transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 hover:shadow-md"
            >
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              反馈
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-16 pb-24 sm:pt-20 sm:pb-32">
        <HeroOneButton
          title={
            <>
              {"一款有温度的\n"}
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                「小而美工具」
              </span>
            </>
          }
          description={AppConfig.description}
        />
        <div
          className="mx-auto mt-16 max-w-md animate-scale-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="group relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <Image
              className="relative w-full"
              src={`${AppConfig.basePath}/assets/images/qrcode_soso.png`}
              alt="小而美工具小程序码"
              width={543}
              height={200}
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            扫码打开小程序，体验更多功能
          </p>
        </div>
      </Section>
    </Background>
  );
};

export { Hero };
