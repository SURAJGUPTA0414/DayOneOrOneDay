console.log('day125 started');

/*--------------------------------------------------*/
// 1️⃣ Deep Clone an Object (Without JSON.parse)
// Input: {a:1, b:{c:2}}
// Output: Deep copied object

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}

let original = { a: 1, b: { c: 2 } };
let copied = deepClone(original);
copied.b.c = 100;

console.log(original); // Should not change


/*--------------------------------------------------*/
// 2️⃣ Debounce Function
// Used in search input optimization

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const sayHello = debounce(() => {
  console.log("Hello Suraj");
}, 1000);


/*--------------------------------------------------*/
// 3️⃣ Throttle Function

function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}


/*--------------------------------------------------*/
// 4️⃣ Group Array of Objects by Key
// Input: [{age:20},{age:30},{age:20}]
// Output: {20:[...],30:[...]}

function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    let groupKey = obj[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(obj);
    return acc;
  }, {});
}

console.log(groupBy([{age:20},{age:30},{age:20}], "age"));


/*--------------------------------------------------*/
// 5️⃣ Promise.all Polyfill (Basic Version)

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

/*--------------------------------------------------*/

console.log('day125 ended');
