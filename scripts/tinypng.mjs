import fs from 'fs/promises';
import tinify from 'tinify';

tinify.key = process.env.TINYPNG_API_KEY;
if (process.argv.length < 3) {
  console.log('Usage: node tinify.mjs <input> [output]');
  console.log('Or: node tinify.mjs <input> # output will be the same as input');
  process.exit(1);
}

async function compressImage(input, output = input) {
  const inputStat = await fs.stat(input);
  console.log(`--> ${input}`);
  console.log(`before compress size: ${inputStat.size}`);

  try {
    await tinify.fromFile(input).toFile(output);
    const outputStat = await fs.stat(input);
    console.log(
      `after compress size: ${outputStat.size}`,
      `reduce ${(((inputStat.size - outputStat.size) / inputStat.size) * 100).toFixed(0)}%`,
    );
    if (input !== output) {
      console.log(`save to ${output}`);
    }
  } catch (error) {
    console.log(error);
  }
}

compressImage(...process.argv.slice(2));
