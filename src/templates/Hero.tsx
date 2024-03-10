import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'一款有温度的微信小程序\n'}
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
        src={`${AppConfig.basePath}/assets/images/qrcode_soso.png`}
        alt="小而美工具小程序码"
        width={2172}
        height={800}
      />
    </Section>
  </Background>
);

export { Hero };
