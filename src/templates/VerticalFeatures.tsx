import { FeatureGrid } from '../feature/FeatureGrid';
import { Section } from '../layout/Section';
import { pages, type TPage } from './pages';

// 获取所有可推荐的功能
const getRecommendedFeatures = () => {
  const systemPages = ['home', 'settings', 'about', 'development'];

  return Object.entries(pages)
    .filter(([key, page]) => {
      const typedPage = page as TPage;
      // 必须启用推荐
      if (!('enableRecommend' in typedPage) || !typedPage.enableRecommend) return false;
      // 排除下线功能
      if ('offline' in typedPage && typedPage.offline) return false;
      // 排除隐藏功能
      if ('hidden' in typedPage && typedPage.hidden) return false;
      // 排除系统页面
      if (systemPages.includes(key)) return false;
      // 只显示主页面,不显示子页面
      if ('group' in typedPage && typedPage.group && typedPage.group !== key) return false;

      return true;
    })
    .map(([key, page]) => ({
      pageId: key as keyof typeof pages,
      description: (('shareTitle' in (page as TPage) && (page as TPage).shareTitle?.[0]) || (page as TPage).title),
    }));
};

const VerticalFeatures = () => (
  <Section
    title="全部功能"
    description="咱这微信小程序的功能,那可太丰富啦!万年历、老黄历,想看哪天看哪天;公历农历随便切,还有佛历道历来凑趣。节气节日都标好,再也不怕忘日子。"
  >
    <FeatureGrid features={getRecommendedFeatures()} />
  </Section>
);

export { VerticalFeatures };
