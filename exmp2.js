//     1. Print out "Program started" at the start of your code
//     2. Create a Promise that resolves after 3 seconds
//        and rejects after 2 seconds
//     3. Log out the promise while it's pending
//     4. Print out "Program in progress..." as well

//     5. Print out "Program complete" if the promise fulfills
//     6. Print out "Program failure" if the promise rejects

//     HINT: Use setTimeout for the delay
// */
function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed");
    }, 2000);
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
async function runProgram() {
  console.log("Program started");
  const promise = createPromise();
  console.log(promise); 
  console.log("Program in progress...");
  try {
    await promise;
    console.log("Program complete");
  } catch (error) {
    console.log("Program failure");
  }
}
runProgram();
