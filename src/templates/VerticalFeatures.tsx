import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
// 从 ucalc 项目复制

const VerticalFeatures = () => (
  <Section
    title="功能介绍"
    description="️✨小而美的生活小工具商店，个性换肤，永久免费️！立即扫码，一键直达！"
  >
    <VerticalFeatureRow
      pageId="calendar"
      description="支持公历视图、农历视图、公历和农历互转、公历节日、农历节日、法定假日调休、宜忌事项、生肖、星座等，一键分享日期。遵循现行的国家标准《农历的编算和颁行(GB/T 33661-2017)》权威可靠。"
    />
    <VerticalFeatureRow
      pageId="calendar_lunar"
      description="日期查询、吉凶查询、神位查询"
      reverse
    />
    <VerticalFeatureRow
      pageId="calendar_foto"
      description="因果犯忌、纪念日、月斋、十斋日、六斋日、朔望斋、观音斋、杨公忌"
    />
    <VerticalFeatureRow
      pageId="calendar_tao"
      description="道教节日、三会日、三元日、八节日、五腊日、八会日、戌日、天赦日"
      reverse
    />
    <VerticalFeatureRow
      pageId="calendar_query"
      description="24节气、农历节日、公历节日、法定节日、佛教节日、道教节日"
    />
    <VerticalFeatureRow
      pageId="bmi_child"
      description="输入儿童（0~7岁）身高体重后，自动计算身高、体重、BMI指数，并提供 0~7 岁儿童的年龄别身高、年龄别体重、年龄别头围、身高别体重和年龄别 BMI 多个数据表格，及时掌握宝宝的发育情况！数据源自卫健委卫生行业标准《7岁以下儿童生长标准(WS/T423—2022)》权威可靠。"
      reverse
    />
    <VerticalFeatureRow
      pageId="bmi_teenager"
      description="输入儿童青少年（7~18岁）身高后，自动计算身高发育等级，支持遗传身高计算，并提供 7~18 岁儿童青少年的年龄别身高数据表格，及时掌握孩子的发育情况！数据源自卫健委卫生行业标准《7 岁～18 岁儿童青少年身高发育等级评价(WS/T
            612—2018)》权威可靠。"
    />
    <VerticalFeatureRow
      pageId="bmi_adult"
      description="输入身高和体重后，自动计算 BMI 指数，估算肥胖程度和疾病风险，迈向健康生活！"
      reverse
    />
    <VerticalFeatureRow
      pageId="qrcode"
      description="制作生成二维码，一键美化，满足个性化需求，包括 Logo（形状、图片、磁村、位置等）、码点（形状和颜色）、码眼（形状和颜色）、背景（颜色、图片、透明度等）、容错率、尺寸、版本"
    />
    <VerticalFeatureRow
      pageId="relationship"
      description="按键输入或文字输入亲戚关系，自动计算亲戚的称呼，也可以反查对方对我的称呼，堪称走亲访友神器！"
    />
    <VerticalFeatureRow
      pageId="basic"
      description="支持加、减、乘、除、余运算，以及括号运算，自动记录计算历史，计算历史长按可以进行大写转换、回填、删除等操作"
      reverse
    />
    <VerticalFeatureRow
      pageId="torch"
      description="一键开关手电筒，精确显示剩余电量，可调节屏幕亮度，一键开启闪烁，并可调节闪烁频率"
    />
    <VerticalFeatureRow
      title="丰富的主题外观"
      description="支持浅色和深色外观，支持跟随系统外观，内置十多种 iOS 强调色，满足你的个性化需求！"
      image={['theme_light.png', 'theme_dark.png']}
      reverse
    />
  </Section>
);

export { VerticalFeatures };
