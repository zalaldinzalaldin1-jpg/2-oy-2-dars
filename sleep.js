function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
async function demo() {
  console.log("Kutishdan oldin");
  await sleep(2000);
  console.log("2 soniyadan keyin");
}
demo();