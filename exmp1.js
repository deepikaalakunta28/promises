
//  1. Print out "Program started" at the start of your code
//     2. Create a Promise that resolves after 3 seconds
//     3. Log out the promise while it's pending
//     4. Print out "Program in progress..." as well
//     5. Print out "Program complete" when the promise completes after 3 seconds

//     HINT: Use setTimeout for the delay
function demo(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },3000)
    })
}
async function run(){
    console.log("program started")
    const threesec=demo();
    console.log(threesec)
    console.log("program in progress...")
    await threesec;
    console.log("program completed")
} 
run()