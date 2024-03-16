import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { hostname } from 'os';

const Hero = (props) => {
  const [hostname, setHostName] = useState('');
  useEffect(() => {
    setHostName(window.location.hostname);
  }, []);

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            {hostname === 'whinc.github.io' ? (
              <Link
                href="https://xiaohui_hubei.gitee.io/ucalc-website/"
                target={'_blank'}
              >
                国内站点
              </Link>
            ) : (
              <Link
                href="https://whinc.github.io/ucalc-website/"
                target={'_blank'}
              >
                国际站点
              </Link>
            )}
          </li>
          <li>
            <Link
              href="https://github.com/whinc/ucalc-website"
              target={'_blank'}
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/whinc/ucalc-website/issues/new"
              target={'_blank'}
            >
              意见反馈
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'一款有温度的小程序\n'}
              <span className="text-primary-500">小而美工具</span>
            </>
          }
          description={AppConfig.description}
          button={null}
          // button={
          //   <Link href="https://creativedesignsguru.com/category/nextjs/">
          //     <Button xl>立即体验</Button>
          //   </Link>
          // }
        />
        <Image
          className="m-auto"
          src={`${AppConfig.basePath}/assets/images/qrcode_soso.png`}
          alt="小而美工具小程序码"
          width={543}
          height={200}
          loading="lazy"
        />
      </Section>
    </Background>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      getWindow: () => window,
    },
  };
}

export { Hero };
