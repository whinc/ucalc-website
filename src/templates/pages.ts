const __DEV__ = false

export const commonShareTitle = [
  "️✨小而美的工具商店，应有尽用，个性换肤，永久免费️！",
  // "全面解决你的日常工具需求!",
  // "全能实用的生活好帮手!",
];

export type TPage = {
  title: string;
  /**
   * 页面所属分组，缺省时属于默认分组（默认分组不会出现在最近使用列表中）
   * - 复杂的功能可能包含多个页面，通过分组联系到一起
   * - 每个分组共享一个入口图标
   * - 分组名要么为空，要么属于 keyof pages 之一
   */
  group?: string;
  path: string;
  shareTitle?: string[];
  // iconfont 图标名称
  icon?: string;
  /**
   * 开启后，页面设置主题时会多出一个“独立主题”的选项，只对当前页面生效
   * @deprecated - 已废弃，支持页面级的d独立题
   */
  enableIndependentTheme?: boolean;
  /**
   * 开启后，页面可被展示到页面底部的推荐位
   */
  enableRecommend?: boolean;
  /**
   * 开启后，图标上展示“新”字样
   */
  badge?: string;
  /**
   * 工具已下线：不会在 app.config.js 中注册，也不会出现在首页入口、页脚推荐位，无法跳转进入
   * @default false
   * */
  offline?: boolean;
  /**
   * 隐藏首页和页脚的入口，不可直接访问，但可跳转访问
   * @default false
   * */
  hidden?: boolean;
};

export const pages = {
  home: {
    title: "首页",
    path: "/pages/home/index",
    shareTitle: commonShareTitle,
  },
  basic: {
    title: "计算器",
    path: "/subpkg2/pages/basic/index",
    group: "basic",
    icon: "calc-arithmetic",
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      "智能计算器，高效便捷，加减乘除、历史记录一网打尽!",
      "精准计算，历史可查。加减乘除、括号，一应俱全!",
      "精准计算，记录无忧。加减乘除、括号，一键掌握!",
    ],
  },
  relationship: {
    title: "亲戚称呼",
    group: "relationship",
    path: "/subpkg2/pages/relationship/index",
    icon: "relationship",
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      "秒懂亲戚称呼，不再尴尬！",
      "亲戚关系晕头转向？试试这款计算神器！",
      "瞬间搞定复杂亲戚称呼，一款神器在手！",
    ],
  },
  bmi_adult: {
    title: "成人肥胖指数(18岁以上)",
    group: "bmi_adult",
    path: "/subpkg2/pages/bmi_adult/index",
    icon: "bmi",
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      "一键计算BMI，轻松掌握健康指数，管理身材更轻松！",
      "一键测BMI，科学评估健康，迈向更健康的生活！",
      "BMI指数计算器，健康体重一测便知!",
    ],
  },
  bmi_child: {
    title: "儿童身高体重(0~7岁)",
    group: "bmi_child",
    path: "/subpkg2/pages/bmi_child/index",
    icon: "bmi-child",
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      "宝宝身高体重水平，一键科学测评!",
      "宝宝生长水平测试，发育情况早知道!",
      "宝宝身高体重是否合格，即刻知晓！",
    ],
  },
  bmi_teenager: {
    title: "青少年身高体重(7~18岁)",
    group: "bmi_teenager",
    path: "/subpkg2/pages/bmi_teenager/index",
    icon: "bmi-teenager",
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: ["发育等级、遗传身高，一键科学测评!"],
  },
  calendar: {
    title: "万年历",
    group: "calendar",
    path: "/subpkg2/pages/calendar/index",
    icon: "calendar",
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: [
      "小而美的万年历，假期早知道!",
      "小而美的万年历，良辰吉日就在今朝!",
    ],
  },
  calendar_lunar: {
    title: "老黄历",
    group: "calendar_lunar",
    path: "/subpkg2/pages/calendar_lunar/index",
    icon: "calendar-lunar",
    enableIndependentTheme: true,
    enableRecommend: true,
  },
  calendar_foto: {
    title: "佛历",
    group: "calendar_foto",
    path: "/subpkg2/pages/calendar_foto/index",
    icon: "calendar-foto",
    enableIndependentTheme: true,
    enableRecommend: true,
  },
  calendar_tao: {
    title: "道历",
    group: "calendar_tao",
    path: "/subpkg2/pages/calendar_tao/index",
    icon: "calendar-tao",
    enableIndependentTheme: true,
    enableRecommend: true,
  },
  calendar_query: {
    title: "节日节气",
    group: "calendar_query",
    path: "/subpkg2/pages/calendar_query/index",
    icon: "calendar-query",
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: ["快速查询节日节气，试试这个工具"],
  },
  torch: {
    title: "手电筒",
    group: "torch",
    path: "/subpkg2/pages/torch/index",
    icon: "torch-on",
    enableIndependentTheme: true,
    enableRecommend: true,
    shareTitle: ["💡点亮黑暗，照亮你的世界🚶‍♂️", "💡 点亮黑暗，一触即发📱"],
  },
  settings: {
    title: "设置",
    path: "/subpkg1/pages/settings/index",
    shareTitle: commonShareTitle,
  },
  about: {
    title: "关于",
    path: "/subpkg1/pages/about/index",
    shareTitle: commonShareTitle,
  },
  dnf: {
    title: "DNF小助手",
    group: "dnf",
    path: "/subpkg3/pages/dnf/index",
    icon: "dnf",
    shareTitle: ["地下城与勇士·起源"],
    enableIndependentTheme: true,
    enableRecommend: false,
    offline: !__DEV__,
  },
  dnf_tools: {
    title: "伤害计算",
    group: "dnf",
    path: "/subpkg3/pages/dnf_tools/index",
    shareTitle: [
      "副本攻略、职业攻略、装备攻略、宠物攻略等，带你领略DNF的精彩世界！",
    ],
    enableIndependentTheme: true,
    offline: !__DEV__,
  },
  dnf_music: {
    title: "DNF BGM",
    group: "dnf",
    path: "/subpkg3/pages/dnf_music/index",
    shareTitle: [
      "唤醒你的青春记忆，热血岁月，旋律永存，一起再战地下城！",
      "唤醒热血青春，每一次旋律，都是一段不灭的记忆！",
    ],
    enableIndependentTheme: true,
    offline: !__DEV__,
  },
  qrcode: {
    title: "二维码制作",
    group: "qrcode",
    path: "/subpkg2/pages/qrcode/index",
    icon: "qrcode",
    shareTitle: ["轻松生成美化二维码，创意无限，快来试试吧！"],
    enableIndependentTheme: false,
    enableRecommend: true,
  },
  qrcode_beautify: {
    title: "二维码美化",
    group: "qrcode",
    path: "/subpkg2/pages/qrcode_beautify/index",
    enableIndependentTheme: false,
    enableRecommend: false,
  },
  calc_retirement_age: {
    title: "计算退休年龄",
    icon: "calc-retirement-age",
    group: "calc_retirement_age",
    enableIndependentTheme: true,
    enableRecommend: true,
    path: "/subpkg2/pages/calc_retirement_age/index",
    shareTitle: ["延迟退休，一键测算，快速准确！"],
  },
  decode_dream: {
    title: "周公解梦",
    icon: "decode-dream",
    group: "decode_dream",
    enableIndependentTheme: true,
    enableRecommend: true,
    path: "/subpkg2/pages/decode_dream/index",
    shareTitle: ["探索梦境奥秘，启迪智慧心灵之旅"],
    offline: !__DEV__,
  },
  decode_bazi: {
    title: "八字",
    icon: "decode-bazi",
    group: "decode_bazi",
    enableIndependentTheme: true,
    enableRecommend: true,
    path: "/subpkg2/pages/decode_bazi/index",
    shareTitle: ["一键算八字，快来试试吧！"],
    hidden: !__DEV__,
  } as TPage,
  avatar: {
    title: "头像美化",
    icon: "avatar",
    group: "avatar",
    enableIndependentTheme: false,
    enableRecommend: true,
    path: "/subpkg3/pages/avatar/index",
    shareTitle: ["一键美化头像，快来试试吧！"],
    offline: true,
  } as TPage,

  mortgage: {
    title: "房贷",
    icon: "iconify mdi--home-variant-outline",
    group: "mortgage",
    enableIndependentTheme: true,
    enableRecommend: true,
    badge: '新',
    path: "/subpkg2/pages/mortgage/main/index",
    shareTitle: ["房贷怎么还？一算就明白！"],
    hide: false, // 显示在首页入口
  } as TPage,

  mortgage_result: {
    title: "预估房贷",
    group: "mortgage",
    enableIndependentTheme: true,
    enableRecommend: false,
    path: "/subpkg2/pages/mortgage/result/index",
    hidden: true, // Hide from home screen
  } as TPage,

  mortgage_detail: {
    title: "月供详情",
    group: "mortgage",
    enableIndependentTheme: true,
    enableRecommend: false,
    path: "/subpkg2/pages/mortgage/detail/index",
    hidden: true, // Hide from home screen
  } as TPage,

  childcare_subsidy: {
    title: "育儿补贴",
    icon: "iconify mdi--child-friendly",
    group: "childcare_subsidy",
    enableIndependentTheme: false,
    enableRecommend: true,
    badge: '热',
    path: "/subpkg2/pages/childcare_subsidy/index",
    shareTitle: [
      "国家育儿补贴，一键计算，快来看看能领多少钱！",
      "育儿补贴新政策，计算器帮你算清楚！"
    ],
  } as TPage,

  blank: {
    title: "空白页",
    path: "/subpkg2/pages/blank/index",
    offline: !__DEV__,
  },
  demo_echarts: {
    title: "echarts 图表",
    path: "/subpkg3/pages/demo_echarts/index",
    offline: !__DEV__,
  },
  development: {
    title: "开发页",
    path: "/subpkg1/pages/development/index",
    shareTitle: commonShareTitle,
    enableIndependentTheme: true,
    offline: !__DEV__,
  },
  native_page_demo: {
    title: "原生页面demo",
    path: "/subpkg1/pages/native-page-demo/index",
    offline: !__DEV__,
  },
} satisfies Record<string, TPage>;
