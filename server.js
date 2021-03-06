const MISSING = process.env.MISSING;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Containers rule! I need more ${MISSING}`);
    await sleep(5000);
  }
}

main();
