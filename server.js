function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Containers rule! I need more ${process.env.MISSING}`);
    await sleep(5000);
  }
}

main();
