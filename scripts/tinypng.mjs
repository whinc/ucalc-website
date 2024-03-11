import fs from 'fs/promises';
import tinify from 'tinify';

tinify.key = process.env.TINYPNG_API_KEY;
if (process.argv.length < 3) {
  console.log('Usage: node tinify.mjs <input> [input...]');
  console.log('Or: node tinify.mjs <input> # output will be the same as input');
  process.exit(1);
}

const inputs = process.argv.slice(2);
for (const input of inputs) {
  await compressImage(input);
}

async function compressImage(input) {
  const inputStat = await fs.stat(input);
  console.log(`--> ${input}`);
  console.log(`before compress size: ${inputStat.size}`);

  try {
    await tinify
      .fromFile(input)
      // 手机截图
      // .resize({ method: 'fit', width: Math.round(1242/3), height: Math.round(2688/3) })
      // 二维码
      // .resize({
      //   method: 'fit',
      //   width: Math.round(430 / 3),
      //   height: Math.round(430 / 3),
      // })
      // 搜一搜
      .resize({
        method: 'fit',
        width: Math.round(1086 / 2),
        height: Math.round(400 / 2),
      })
      .toFile(input);
    const outputStat = await fs.stat(input);
    console.log(`after compress size: ${outputStat.size}`);
    console.log(
      `reduce ${(((inputStat.size - outputStat.size) / inputStat.size) * 100).toFixed(0)}%`,
    );
    console.log('ok');
  } catch (error) {
    console.log(error);
  }
}
