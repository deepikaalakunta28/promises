//  1. Print out "Program started" at the start of your code
//     2. Create a Promise that resolves after 3 seconds
//     3. Log out the promise while it's pending
//     4. Print out "Program in progress..." as well

//     5. Print out "Step 1 complete" when the first promise fulfills
//     6. Have the first promise return another new Promise that will
//        fulfill after 3 seconds with the message: "Step 2 Complete"

//     7. Print out the message from the second promise after it
//        fulfills ("Step 2 Complete")

//     HINT: Use setTimeout for the delay
function firstStep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

function secondStep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Step 2 Complete");
    }, 3000);
  });
}

async function runProgram() {
  console.log("Program started");

  const promise = firstStep();
  console.log(promise); // pending

  console.log("Program in progress...");

  await promise;
  console.log("Step 1 complete");

  const message = await secondStep();
  console.log(message);
}

runProgram();
