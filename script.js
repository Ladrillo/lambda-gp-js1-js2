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
let myBool2 = 3 < 2; // bolean! Not number
let myArr = []; // array literal
let myObj = { a: 1 }; // object literal
let myObj2 = myObj;
// the value of myFun IS NOT 7, it's just a "function" (an object)
let myFun = function () {
  return 7;
}
let myFun2 = function () {
  // console.log(4);
}
// value of invocation: whatever the function returns IMPORTANT
let myInvocation = myFun();

// if function does not return anything,
// the value of the invocation is undefined
let myInvocation2 = myFun2();

// review truthy versus falsy values

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

// blocks and scoping ================================
// curlies define "private regions"
// I can declare variables inside and
// they are not visible from the outside
{
  let seeMee = 5;
}
// console.log(seeMee); // BOOOM -> this is an ERROR

// on the other hand, code inside a block ============
// can "see" declarations outside
let seeMeeToo = 8;
{
  // console.log(seeMeeToo); // works fine
}

// research hoisting
// console.log(anotherCuteFunction('josh', 'smith'));

// function declaration
function myLittleFunction(a, b) {
  console.log(`the args are ${a} ${b}`);
}

// function expression
const anotherCuteFunction = function label(a, b) {
  console.log(`the args are ${a} ${b}`);
}

// function expression with arrow syntax (no return)
const yetAnother = (a, b) => {
  console.log(`the args are ${a} ${b}`);
}

// function declaration (hoist)
function returnsFive() {
  return 5;
}

// short hand: no curlies, no return keyword, no function keyword...
const returnsFiveAlt = () => 5;

// gotcha with returning objects
const returnsEmptyObj = () => {
  return {};
}
// wrap with parens if we intend to return object right away
const returnsEmptyObjShorter = () => ({});

// visibility
const myRandomThing = 5;
const logTheRandom = function () {
  console.log(myRandomThing);
}