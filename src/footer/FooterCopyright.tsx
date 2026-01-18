import { AppConfig } from "../utils/AppConfig";

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}。 由{" "}
    <a
      className="text-sky-500"
      href="https://github.com/whinc"
      target={"_blank"}
    >
      右耳朵猫
    </a>
    （微信号：<a>iCloudCoding</a>）开发。
  </div>
);

export { FooterCopyright };
