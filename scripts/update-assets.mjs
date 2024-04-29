#!/usr/bin/env zx

import 'zx/globals';
import tinify from 'tinify';
import { exit } from 'process';

if (!process.env.TINYPNG_API_KEY) {
  echo(chalk.red('请指定环境变量 TINYPNG_API_KEY'));
  echo(`申请 API key 请前往 https://tinypng.com/developers`);
  exit(1);
}

tinify.key = process.env.TINYPNG_API_KEY;

const rootDir = path.join(__dirname, '../public');
const rawDir = path.join(rootDir, 'assets', 'screenshots_raw');
const screenshotsDir = path.join(rootDir, 'assets', 'screenshots');

echo(`check ${rawDir}`);
if (!fs.statSync(rawDir).isDirectory()) {
  console.log(chalk.red(`目录不存在: ${rawDir}`));
  process.exit(1);
}

/** @type {string[]} */
let fileNames = [];
// 增量压缩
if (argv.since) {
  echo('增量压缩')
  const since = new Date(argv.since);
  const fileEntries = await glob('*[_dark|_light|_qrcode].[pP][nN][gG]', {
    cwd: rawDir,
    objectMode: true,
    stats: true,
  });
  fileNames = fileEntries
    .filter((entry) => entry.stats.birthtimeMs >= since.getTime())
    .map((entry) => entry.name);
} else {
  echo('全量压缩')
  fileNames = await glob('*[_dark|_light|_qrcode].[pP][nN][gG]', {
    cwd: rawDir,
  });
}

const totalCount = fileNames.length;
echo(`found ${totalCount} files`);
fs.mkdirSync(screenshotsDir, { recursive: true });

let finishedCount = 0;
await Promise.all(
  fileNames.map(async (filename) => {
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

echo('done!');
