console.log('day54 started ');


// Merge two objects

// function mergetwoobj(obj1,obj2){

//     let x = {...obj1,...obj2}

//     console.log(x)

// }

// mergetwoobj({name:'suraj'},{age:17})

// Count properties in object
// function countpropertiesinobj(obj){

//     console.log(Object.keys(obj).length)

// }

// countpropertiesinobj({name:'suraj',age:17})

// Convert object to array

// function objectToArray(obj) {
//     let arr = [];
//     for (let key in obj) {
//         arr.push(key, obj[key]);
//     }
//     return arr;
// }

// console.log(objectToArray({ name: "suraj", age: 17 }));


// function objectToArray(obj) {
//     return Object.entries(obj);
// }

// console.log(objectToArray({ name: "suraj", age: 17 }));


// Convert array to object

// function arrayToObject(arr) {
//     let obj = {};

//     for (let i = 0; i < arr.length; i += 2) {
//         let key = arr[i];
//         let value = arr[i + 1];
//         obj[key] = value;
//     }

//     return obj;
// }

// console.log(arrayToObject(['name', 'suraj', 'age', 17]));


// Deep clone an object

// function deepcloneobj(obj){
//     console.log(JSON.parse(JSON.stringify(obj)))
// }

// deepcloneobj({name:'shyam',age:17})

// function deepClone(obj) {
//     return structuredClone(obj);
// }

// console.log(deepClone({ name: 'shyam', age: 17 }));


// Compare two objects

// Remove property from object

// Check if object is empty

// Freeze an object

// Seal an object

// Sort object by keys

// Sort object by values

// Group array items by property

// Swap keys & values

// Nested object value finder


console.log('day 54 ended')