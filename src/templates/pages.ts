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

// 直接复制项目 ucalc 的 pages 常量过来
export const pages = {
  // 这是一个虚拟页面
  $lastAccess: {
    title: '上次访问的页面',
    path: '$lastAccess',
  } satisfies TPage,
  home: {
    title: '首页',
    path: '/pages/home/index',
    shareTitle: commonShareTitle,
    icon: 'home',
  } satisfies TPage,
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
  } satisfies TPage,
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
  } satisfies TPage,
  bmi_adult: {
    title: '成人肥胖评估(18岁以上)',
    path: '/subpkg2/pages/bmi_adult/index',
    icon: 'bmi',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      '一键计算BMI，轻松掌握健康指数，管理身材更轻松！',
      '一键测BMI，科学评估健康，迈向更健康的生活！',
      'BMI指数计算器，健康体重一测便知!',
    ],
  } satisfies TPage,
  bmi_child: {
    title: '儿童生长评估(0~7岁)',
    path: '/subpkg2/pages/bmi_child/index',
    icon: 'bmi-child',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      '宝宝身高体重水平，一键科学测评!',
      '宝宝生长水平测试，发育情况早知道!',
      '宝宝身高体重是否合格，即刻知晓！',
    ],
  } satisfies TPage,
  bmi_teenager: {
    title: '青少年身高评估(7~18岁)',
    path: '/subpkg2/pages/bmi_teenager/index',
    icon: 'bmi-teenager',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: ['发育等级、遗传身高，一键科学测评!'],
  } satisfies TPage,
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
  } satisfies TPage,
  calendar_lunar: {
    title: '老黄历',
    path: '/subpkg2/pages/calendar_lunar/index',
    icon: 'calendar-lunar',
    enableIndependentTheme: true,
    enableRecommend: true,
  } satisfies TPage,
  calendar_foto: {
    title: '佛历',
    path: '/subpkg2/pages/calendar_foto/index',
    icon: 'calendar-foto',
    enableIndependentTheme: true,
    enableRecommend: true,
  } satisfies TPage,
  calendar_tao: {
    title: '道历',
    path: '/subpkg2/pages/calendar_tao/index',
    icon: 'calendar-tao',
    enableIndependentTheme: true,
    enableRecommend: true,
  } satisfies TPage,
  calendar_query: {
    title: '节日节气',
    path: '/subpkg2/pages/calendar_query/index',
    icon: 'calendar-query',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: ['快速查询节日节气，试试这个工具'],
  } satisfies TPage,
  torch: {
    title: '手电筒',
    path: '/subpkg2/pages/torch/index',
    icon: 'torch-on',
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: ['💡点亮黑暗，照亮你的世界🚶‍♂️', '💡 点亮黑暗，一触即发📱'],
  } satisfies TPage,
  settings: {
    title: '设置',
    path: '/subpkg1/pages/settings/index',
    icon: 'settings',
    shareTitle: commonShareTitle,
  } satisfies TPage,
  about: {
    title: '关于',
    path: '/subpkg1/pages/about/index',
    shareTitle: commonShareTitle,
  } satisfies TPage,
  dnf: {
    title: 'DNF小助手',
    path: '/subpkg3/pages/dnf/index',
    icon: 'dnf',
    shareTitle: ['地下城与勇士·起源'],
    enableIndependentTheme: true,
    enableRecommend: true,
  } satisfies TPage,
  dnf_tools: {
    title: '伤害计算',
    path: '/subpkg3/pages/dnf_tools/index',
    shareTitle: [
      '副本攻略、职业攻略、装备攻略、宠物攻略等，带你领略DNF的精彩世界！',
    ],
    enableIndependentTheme: true,
  } satisfies TPage,
  dnf_music: {
    title: 'DNF BGM',
    path: '/subpkg3/pages/dnf_music/index',
    shareTitle: [
      '唤醒你的青春记忆，热血岁月，旋律永存，一起再战地下城！',
      '唤醒热血青春，每一次旋律，都是一段不灭的记忆！',
    ],
    enableIndependentTheme: true,
  } satisfies TPage,
  qrcode: {
    title: '二维码制作',
    path: '/subpkg2/pages/qrcode/index',
    icon: 'qrcode',
    shareTitle: ['轻松生成美化二维码，创意无限，快来试试吧！'],
    enableIndependentTheme: false,
    enableRecommend: true,
  } satisfies TPage,
  qrcode_beautify: {
    title: '二维码美化',
    path: '/subpkg2/pages/qrcode_beautify/index',
    enableIndependentTheme: false,
    enableRecommend: false,
  } satisfies TPage,
  blank: {
    title: '空白页',
    path: '/subpkg2/pages/blank/index',
  } satisfies TPage,
  demo_echarts: {
    title: 'echarts 图表',
    path: '/subpkg3/pages/demo_echarts/index',
  } satisfies TPage,
  development: {
    title: '开发页',
    path: '/subpkg1/pages/development/index',
    shareTitle: commonShareTitle,
    enableIndependentTheme: true,
  } satisfies TPage,
  native_page_demo: {
    title: '原生页面demo',
    path: '/subpkg1/pages/native-page-demo/index',
  } satisfies TPage,
} as const;
