// /**
//  * this keyword :
//  * In JavaScript, the this keyword refers to an object.

//   Which object depends on how this is being invoked (used or called).

//   The this keyword refers to different objects depending on how it is used:

//   *In an object method, this refers to the object.
//   *Alone, this refers to the global object.
//   *In a function, this refers to the global object.
//   *In a function, in strict mode, this is undefined.
//   *In an event, this refers to the element that received the event.
// */

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
}

const person1 = new Person("meher");
console.log(person1);
person1.sayHello(); //'meher'

// /**
//  * whats a promise in jacasctipt
//  *if the promise is fulfilled then it will return resolve
//  *if the promise is failed it will return reject
//  *with async we use try and catch like the exp in line 45
//  */

const testPromise = new Promise((resolve, reject) => {
  resolve("ok");
  reject("bob");
});

testPromise.then(console.log).catch(console.error);

async function main() {
  try {
    const result = await testPromise;
    console.log(result);
  } catch {
    console.error(err);
  }
}

// /**
//  * mutability && immutability
//  */

const x = "meher";
// x = "kejr"; //Uncaught TypeError: Assignment to constant variable.
// //we  cant reassign the value with const ==> immutable
let y = "immutable???";
y = "mutable";
console.log(y); //mutable , same with var

const obj = {
  name: "meher",
};
obj.name = "bel";
console.log(obj); //obj keys is mutable

/**
 * closure
 *in this case the count variable is a scoped variable , it can onnly be accessed 
 inside the function counter() and by then we can access it inside the callback function
 */

function counter() {
  let count = 0;
  return () => {
    return count++;
  };
}
console.log(counter()); //output :  () => { return count++ }
const c = counter();
console.log(c());
console.log(c());

// // another exp

function outerFunction(outVariable) {
  return function innerFunction(insideVariable) {
    console.log("outer variable :" + outVariable);
    console.log("inside variable :" + insideVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");
//or we can access it this way
outerFunction("outer")("inner");

//simply we can say that every thing available in the outer function is available
//inside the inner function since in javascript any thing in the inside has access to the outside
//inner scope has access to the global scope , but if we reverse its not the case
