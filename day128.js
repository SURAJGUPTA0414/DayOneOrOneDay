console.log('day128 started');

/*--------------------------------------------------*/
// 1️⃣ Implement Debounce Function
// Used in search input optimization (React interviews 🔥)

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const sayHello = debounce(() => {
  console.log("Hello Suraj!");
}, 1000);

sayHello();


/*--------------------------------------------------*/
// 2️⃣ Implement Throttle Function
// Useful for scroll / resize events

function throttle(fn, limit) {
  let flag = true;

  return function (...args) {
    if (!flag) return;

    fn.apply(this, args);
    flag = false;

    setTimeout(() => {
      flag = true;
    }, limit);
  };
}

const logMessage = throttle(() => {
  console.log("Throttled Call");
}, 2000);

logMessage();


/*--------------------------------------------------*/
// 3️⃣ Deep Clone an Object (Basic Version)

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = { name: "Suraj", skills: { tech: "React" } };
const copy = deepClone(original);

copy.skills.tech = "Angular";

console.log(original.skills.tech); // React
console.log(copy.skills.tech);     // Angular


/*--------------------------------------------------*/
// 4️⃣ Custom Implementation of Array.map()

Array.prototype.myMap = function(callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

console.log([1,2,3].myMap(num => num * 2));


/*--------------------------------------------------*/
// 5️⃣ Check if Object is Empty

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({}));      // true
console.log(isEmptyObject({a:1}));   // false


/*--------------------------------------------------*/

console.log('day128 ended');