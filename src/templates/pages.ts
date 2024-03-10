export const commonShareTitle = [
  '️✨一款有温度的全能工具助手!无广告/无登录/永久免费❤️',
  // "全面解决你的日常工具需求!",
  // "全能实用的生活好帮手!",
];

export const pages = {
  // 这是一个虚拟页面
  $lastAccess: {
    title: '上次访问的页面',
    path: '$lastAccess',
  },
  home: {
    title: '首页',
    path: '/pages/home/index',
    shareTitle: commonShareTitle,
  },
  basic: {
    title: '科学计算器',
    path: '/subpkg2/pages/basic/index',
    icon: 'arithmetic',
    shareTitle: [
      '智能计算器，高效便捷，加减乘除、历史记录一网打尽!',
      '精准计算，历史可查。加减乘除、括号，一应俱全!',
      '精准计算，记录无忧。加减乘除、括号，一键掌握!',
    ],
  },
  relationship: {
    title: '亲戚称呼',
    path: '/subpkg2/pages/relationship/index',
    icon: 'relationship',
    shareTitle: [
      '秒懂亲戚称呼，不再尴尬！',
      '亲戚关系晕头转向？试试这款计算神器！',
      '瞬间搞定复杂亲戚称呼，一款神器在手！',
    ],
  },
  bmi_adult: {
    title: '成人肥胖评估',
    path: '/subpkg2/pages/bmi_adult/index',
    icon: 'bmi',
    shareTitle: [
      '一键计算BMI，轻松掌握健康指数，管理身材更轻松！',
      '一键测BMI，科学评估健康，迈向更健康的生活！',
      'BMI指数计算器，健康体重一测便知!',
    ],
  },
  bmi_child: {
    title: '儿童生长评估 (0~7岁)',
    path: '/subpkg2/pages/bmi_child/index',
    icon: 'smtz',
    shareTitle: [
      '宝宝身高体重水平，一键科学测评!',
      '宝宝生长水平测试，发育情况早知道!',
      '宝宝身高体重是否合格，即刻知晓！',
    ],
  },
  calendar: {
    title: '万年历',
    path: '/subpkg2/pages/calendar/index',
    icon: 'calendar',
    shareTitle: [
      '小而美的万年历，假期早知道!',
      '小而美的万年历，良辰吉日就在今朝!',
    ],
  },
  blank: {
    title: '空白页',
    path: '/subpkg2/pages/blank/index',
  },
  torch: {
    title: '手电筒',
    path: '/subpkg2/pages/torch/index',
    icon: 'torch-on',
    shareTitle: ['💡点亮黑暗，照亮你的世界🚶‍♂️', '💡 点亮黑暗，一触即发📱'],
  },
  settings: {
    title: '设置',
    path: '/subpkg1/pages/settings/index',
    shareTitle: commonShareTitle,
  },
  about: {
    title: '关于',
    path: '/subpkg1/pages/about/index',
    shareTitle: commonShareTitle,
  },
  development: {
    title: '开发页',
    path: '/subpkg1/pages/development/index',
    shareTitle: commonShareTitle,
  },
} as const;
