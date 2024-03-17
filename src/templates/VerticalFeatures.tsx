import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
// 从 ucalc 项目复制
import { pages } from './pages';

const VerticalFeatures = () => (
  <Section title="功能介绍" description="一个小程序，搞定所有！">
    <VerticalFeatureRow
      title={pages.calendar.title}
      description="支持公历视图、农历视图、公历和农历互转、公历节日、农历节日、法定假日调休、宜忌事项、生肖、星座等，一键分享日期。遵循现行的国家标准《农历的编算和颁行(GB/T 33661-2017)》权威可靠。"
      image={`/assets/screenshots/calendar.png`}
      qrcode="/assets/qrcodes/calendar.png"
    />
    <VerticalFeatureRow
      title={pages.relationship.title}
      description="按键输入或文字输入亲戚关系，自动计算亲戚的称呼，也可以反查对方对我的称呼，堪称走亲访友神器！"
      image="/assets/screenshots/relationship.png"
      qrcode="/assets/qrcodes/relationship.png"
      reverse
    />
    <VerticalFeatureRow
      title={pages.bmi_adult.title}
      description="输入身高和体重后，自动计算 BMI 指数，估算肥胖程度和疾病风险，迈向健康生活！"
      image="/assets/screenshots/bmi_adult.png"
      qrcode="/assets/qrcodes/bmi_adult.png"
    />
    <VerticalFeatureRow
      title={pages.bmi_child.title}
      description="输入儿童身高体重后，自动计算其百分位或标准差分布情况，并提供 0~7 岁儿童的年龄别身高、年龄别体重、年龄别头围、身高别体重和年龄别 BMI 多个表格数据查询，及时掌握宝宝的发育情况！数据源自卫健委卫生行业标准《7岁以下儿童生长标准(WS/T423—2022)》权威可靠。"
      image="/assets/screenshots/bmi_child.png"
      qrcode="/assets/qrcodes/bmi_child.png"
      reverse
    />
    <VerticalFeatureRow
      title={pages.basic.title}
      description="支持加、减、乘、除、余运算，以及括号运算，自动记录计算历史，计算历史长按可以进行大写转换、回填、删除等操作"
      image="/assets/screenshots/basic.png"
      qrcode="/assets/qrcodes/basic.png"
    />
    <VerticalFeatureRow
      title={pages.torch.title}
      description="一键开关手电筒，精确显示剩余电量，可调节屏幕亮度，一键开启闪烁，并可调节闪烁频率"
      image="/assets/screenshots/torch.jpeg"
      qrcode="/assets/qrcodes/torch.png"
      reverse
    />
    <VerticalFeatureRow
      title="丰富的主题"
      description="内置十多种主题，全部免费提供，一键换肤，满足你的个性化需求！"
      image="/assets/screenshots/themes.jpeg"
    />
  </Section>
);

export { VerticalFeatures };
