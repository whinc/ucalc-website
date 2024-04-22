import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
// 从 ucalc 项目复制

const VerticalFeatures = () => (
  <Section
    title="功能介绍"
    description="️✨小而美的工具商店，应有尽用，个性换肤，永久免费️！"
  >
    <VerticalFeatureRow
      pageId="calendar"
      description="支持公历视图、农历视图、公历和农历互转、公历节日、农历节日、法定假日调休、宜忌事项、生肖、星座等，一键分享日期。遵循现行的国家标准《农历的编算和颁行(GB/T 33661-2017)》权威可靠。"
    />
    <VerticalFeatureRow
      pageId="calendar_lunar"
      description="日期查询、吉凶查询、神位查询"
      reverse
      // qrcode="/assets/qrcodes/calendar.png"
    />
    <VerticalFeatureRow
      pageId="calendar_query"
      description="24节气、农历节日、公历节日、西方节日、偏门节日"
    />
    <VerticalFeatureRow
      pageId="relationship"
      description="按键输入或文字输入亲戚关系，自动计算亲戚的称呼，也可以反查对方对我的称呼，堪称走亲访友神器！"
      reverse
    />
    <VerticalFeatureRow
      pageId="bmi_adult"
      description="输入身高和体重后，自动计算 BMI 指数，估算肥胖程度和疾病风险，迈向健康生活！"
    />
    <VerticalFeatureRow
      pageId="bmi_child"
      description="输入儿童身高体重后，自动计算其百分位或标准差分布情况，并提供 0~7 岁儿童的年龄别身高、年龄别体重、年龄别头围、身高别体重和年龄别 BMI 多个表格数据查询，及时掌握宝宝的发育情况！数据源自卫健委卫生行业标准《7岁以下儿童生长标准(WS/T423—2022)》权威可靠。"
      reverse
    />
    <VerticalFeatureRow
      pageId="basic"
      description="支持加、减、乘、除、余运算，以及括号运算，自动记录计算历史，计算历史长按可以进行大写转换、回填、删除等操作"
    />
    <VerticalFeatureRow
      pageId="torch"
      description="一键开关手电筒，精确显示剩余电量，可调节屏幕亮度，一键开启闪烁，并可调节闪烁频率"
      reverse
    />
    <VerticalFeatureRow
      title="丰富的主题外观"
      description="支持浅色和深色外观，内置十多种强调色，全部免费提供，满足你的个性化需求！"
      image="appearance"
    />
  </Section>
);

export { VerticalFeatures };
