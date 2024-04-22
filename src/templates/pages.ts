export const commonShareTitle = [
  '️✨小而美的工具商店，应有尽用，个性换肤，永久免费️！',
  // "全面解决你的日常工具需求!",
  // "全能实用的生活好帮手!",
];

export type TPage = {
  title: string;
  path: string;
  shareTitle?: string[];
  // iconfont 图标名称
  icon?: string;
  /**
   * 开启后，页面设置主题时会多出一个“独立主题”的选项，只对当前页面生效
   */
  enableIndependentTheme?: boolean;
  /**
   * 开启后，页面可被展示到页面底部的推荐位
   */
  enableRecommend?: boolean;
};

export const pages = {
  // 这是一个虚拟页面
  $lastAccess: {
    title: '上次访问的页面',
    path: '$lastAccess',
  } as TPage,
  home: {
    title: '首页',
    path: '/pages/home/index',
    shareTitle: commonShareTitle,
    icon: 'home',
  } as TPage,
  basic: {
    title: '科学计算器',
    path: '/subpkg2/pages/basic/index',
    icon: 'arithmetic',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      '智能计算器，高效便捷，加减乘除、历史记录一网打尽!',
      '精准计算，历史可查。加减乘除、括号，一应俱全!',
      '精准计算，记录无忧。加减乘除、括号，一键掌握!',
    ],
  } as TPage,
  relationship: {
    title: '亲戚称呼',
    path: '/subpkg2/pages/relationship/index',
    icon: 'relationship',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      '秒懂亲戚称呼，不再尴尬！',
      '亲戚关系晕头转向？试试这款计算神器！',
      '瞬间搞定复杂亲戚称呼，一款神器在手！',
    ],
  } as TPage,
  bmi_adult: {
    title: '成人肥胖评估 (BMI指数)',
    path: '/subpkg2/pages/bmi_adult/index',
    icon: 'bmi',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      '一键计算BMI，轻松掌握健康指数，管理身材更轻松！',
      '一键测BMI，科学评估健康，迈向更健康的生活！',
      'BMI指数计算器，健康体重一测便知!',
    ],
  } as TPage,
  bmi_child: {
    title: '儿童生长评估 (0~7岁)',
    path: '/subpkg2/pages/bmi_child/index',
    icon: 'smtz',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      '宝宝身高体重水平，一键科学测评!',
      '宝宝生长水平测试，发育情况早知道!',
      '宝宝身高体重是否合格，即刻知晓！',
    ],
  } as TPage,
  bmi_teenager: {
    title: '儿童青少年身高评估 (7~18岁)',
    path: '/subpkg2/pages/bmi_teenager/index',
    icon: 'smtz',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [],
  } as TPage,
  calendar: {
    title: '万年历',
    path: '/subpkg2/pages/calendar/index',
    icon: 'calendar',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      '小而美的万年历，假期早知道!',
      '小而美的万年历，良辰吉日就在今朝!',
    ],
  } as TPage,
  calendar_lunar: {
    title: '老黄历',
    path: '/subpkg2/pages/calendar_lunar/index',
    icon: 'calendar-lunar',
    enableIndependentTheme: true,
    enableRecommend: true,
  } as TPage,
  calendar_query: {
    title: '节日查询',
    path: '/subpkg2/pages/calendar_query/index',
    icon: 'calendar-query',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: ['快速查询节日，试试这个工具'],
  } as TPage,
  blank: {
    title: '空白页',
    path: '/subpkg2/pages/blank/index',
  } as TPage,
  torch: {
    title: '手电筒',
    path: '/subpkg2/pages/torch/index',
    icon: 'torch-on',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: ['💡点亮黑暗，照亮你的世界🚶‍♂️', '💡 点亮黑暗，一触即发📱'],
  } as TPage,
  settings: {
    title: '设置',
    path: '/subpkg1/pages/settings/index',
    icon: 'settings',
    shareTitle: commonShareTitle,
  } as TPage,
  about: {
    title: '关于',
    path: '/subpkg1/pages/about/index',
    shareTitle: commonShareTitle,
  } as TPage,
  development: {
    title: '组件示例',
    path: '/subpkg1/pages/development/index',
    shareTitle: commonShareTitle,
  } as TPage,
  native_page_demo: {
    title: '原生页面demo',
    path: '/subpkg1/pages/native-page-demo/index',
  } as TPage,
} as const;
