// let a = 10;
// let b = 34;

// // console.log(a)
// // console.log(b)

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// let a = 15;
// let b = 20;

// a = a + b
// b = a - b
// a = a - b

// console.log(a);
// console.log(b);

// let a = 10;
// let b = 34;

// console.log(a); // 10
// console.log(b); // 34

// [a, b] = [b, a];

// console.log(a); // 34
// console.log(b); // 10

const promise = new Promise((resolve, reject) => {
  if (true) {
    const data = { name: "shivang", age: 23 };
    resolve(data);
  } else {
    reject("fail");
  }
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
