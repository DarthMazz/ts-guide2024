let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person = {
  name: {
    first: "Jack",
    last: "Smith"
  },
  age: 21,
}

const fruits = ['Apple', 'Banana', 'Grape', 2];
const book: [string, number, boolean] = ['Apple', 21, true];

const CoffeeSize = {
  SHORT = 'SHORT',
  TALL = 'TALL',
}


const doubleNumber: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => {
  return doubleNum
});