//resolve
let abc = true;
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("prromise Resolved");
  }, 2000);
});
async function asyncFunction() {
  let result = await promise;
  console.log(result);
  console.log("gud day");
}
asyncFunction();

//reject
let xyz = true;
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("prromise  not Resolved");
  }, 2000);
});
async function asyncFunc() {
  let result = await promise1;
  console.log(result);
  console.log("hello");
}
asyncFunc();
