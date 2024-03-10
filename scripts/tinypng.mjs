import fs from 'fs/promises';
import tinify from 'tinify';

tinify.key = process.env.TINYPNG_API_KEY;
if (process.argv.length < 3) {
  console.log('Usage: node tinify.mjs <input> <output>');
  console.log('Or: node tinify.mjs <input> # output will be the same as input');
  process.exit(1);
}
const input = process.argv[2];
const output = process.argv[3] || input;

const inputStat = await fs.stat(input);
console.log(`${input} size: ${inputStat.size}`);

try {
  await tinify
    .fromFile(input)
    // .resize({ method: 'fit', width: 1086, height: 800 })
    .toFile(output);
  const outputStat = await fs.stat(output);
  console.log(`${output} size: ${outputStat.size}`);
  console.log(
    `reduce ${(((inputStat.size - outputStat.size) / inputStat.size) * 100).toFixed(0)}%`,
  );
  console.log('ok');
} catch (error) {
  console.log(error);
}
