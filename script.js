console.log('💥 hello world!!! 💥');

// this is declaration
var foo;
// this is assignment
foo = 5;
// declaration plus assignment
var bar = 7;
// using let. can't re-declare
let myVarWithLet = 7;
// using let. can re-assign
myVarWithLet = 5;
// using const. can't re-declare
const myVarWithConst = true;
// using const. can't re-assign either
// myVarWithConst = false;
// var? var can be re-declared and re-assigned

// literal values
let myNum = 5;
let myNum2 = 5 + 1;
let myBool = false;
let myBool2 = 3 < 2;
let myArr = [];
let myObj = { a: 1 };
let myObj2 = myObj;
let myFun = function () {
  return 7;
}
let myFun2 = function () {
  // console.log(4);
}
// value of invocation: whatever the function returns
let myInvocation = myFun();
// if function does not return anything,
// the value of the invocation is undefined
let myInvocation2 = myFun2();

// equality
// for primitive values to be strictly equal (===)
// it's enough for the values to be the same
let a = 6;
let b = 6;
// console.log(a === b);

// for composite values to be strictly equal (===)
// both variables would need to point to the same 
// thing in memory
let c = {};
let d = c;
// console.log(c === d);

// blocks and scoping
// curlies define "private regions"
// I can declare variables and
// they are not visible from the outside
let seeMee = 5;
{
  console.log(seeMee);
}