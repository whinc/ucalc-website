#!/usr/bin/env zx

import 'zx/globals'
import tinify from 'tinify';

tinify.key = process.env.TINYPNG_API_KEY;
const rootDir = path.join(__dirname, '../public');
const rawDir = path.join(rootDir, 'assets', 'screenshots_raw');
const screenshotsDir = path.join(rootDir, 'assets', 'screenshots');

echo(`check ${rawDir}`);
if (!fs.statSync(rawDir).isDirectory()) {
  console.log(chalk.red(`目录不存在: ${rawDir}`));
  process.exit(1);
}

if (fs.existsSync(screenshotsDir)) {
  echo(`remove ${screenshotsDir}`);
  fs.rmSync(screenshotsDir, { recursive: true });
}

echo(`regenerate ${screenshotsDir}`);
const screenshotsFileNames = await glob('*[_dark|_light|_qrcode].[pP][nN][gG]', {
  cwd: rawDir,
});
const totalCount = screenshotsFileNames.length
echo(`found ${totalCount} files`)
fs.mkdirSync(screenshotsDir, { recursive: true });

let finishedCount = 0
await Promise.all(
  screenshotsFileNames.map(async (filename) => {
    const inputPath = path.join(rawDir, filename);
    const outputPath = path.join(
      screenshotsDir,
      filename.replace(/png$/i, 'png'),
    );
    const inputStat = await fs.stat(inputPath);
    await tinify.fromFile(inputPath).toFile(outputPath);
    const outputStat = await fs.stat(outputPath);
    const reducePercent =
      (((inputStat.size - outputStat.size) / inputStat.size) * 100).toFixed(0) +
      '%';
    finishedCount += 1;
    echo(
      `[${finishedCount}/${totalCount}]`,
      filename,
      `${inputStat.size} -> ${outputStat.size}`,
      `(reduce ${chalk.green(reducePercent)})`,
    );
  }),
);

echo('done!')