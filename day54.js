console.log('day54 started ');

// Merge two objects
function mergetwoobj(obj1, obj2) {
    let x = { ...obj1, ...obj2 };
    console.log(x);
}
mergetwoobj({ name: 'suraj' }, { age: 17 });

// Count properties in object
function countpropertiesinobj(obj) {
    console.log(Object.keys(obj).length);
}
countpropertiesinobj({ name: 'suraj', age: 17 });

// Convert object to array (method 1)
function objectToArray(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(key, obj[key]);
    }
    return arr;
}
console.log(objectToArray({ name: "suraj", age: 17 }));

// Convert object to array (method 2)
function objectToArray2(obj) {
    return Object.entries(obj);
}
console.log(objectToArray2({ name: "suraj", age: 17 }));

// Convert array to object
function arrayToObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
        let key = arr[i];
        let value = arr[i + 1];
        obj[key] = value;
    }
    return obj;
}
console.log(arrayToObject(['name', 'suraj', 'age', 17]));

// Deep clone an object (JSON method)
function deepcloneobj(obj) {
    console.log(JSON.parse(JSON.stringify(obj)));
}
deepcloneobj({ name: 'shyam', age: 17 });

// Deep clone (structuredClone)
function deepClone(obj) {
    return structuredClone(obj);
}
console.log(deepClone({ name: 'shyam', age: 17 }));

// Compare two objects (deep comparison)
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== "object" || obj1 === null ||
        typeof obj2 !== "object" || obj2 === null) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));

// Remove property from object
function removeProp(obj, prop) {
    delete obj[prop];
    return obj;
}
console.log(removeProp({ name: 'suraj', age: 17 }, 'age'));

// Check if object is empty
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));

// Freeze an object
function freezeObj(obj) {
    return Object.freeze(obj);
}
let frozen = freezeObj({ name: 'suraj' });
console.log(frozen);

// Seal an object
function sealObj(obj) {
    return Object.seal(obj);
}
let sealed = sealObj({ name: 'suraj' });
sealed.name = "updated";
console.log(sealed);

// Sort object by keys
function sortByKeys(obj) {
    return Object.keys(obj)
        .sort()
        .reduce((acc, key) => {
            acc[key] = obj[key];
            return acc;
        }, {});
}
console.log(sortByKeys({ b: 2, a: 1, c: 3 }));

// Sort object by values
function sortByValues(obj) {
    return Object.entries(obj)
        .sort((a, b) => a[1] - b[1])
        .reduce((acc, [k, v]) => {
            acc[k] = v;
            return acc;
        }, {});
}
console.log(sortByValues({ a: 3, b: 1, c: 2 }));

// Group array items by property
function groupBy(arr, prop) {
    return arr.reduce((acc, item) => {
        let key = item[prop];
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
}
console.log(groupBy(
    [
        { name: 'suraj', age: 17 },
        { name: 'ram', age: 17 },
        { name: 'shyam', age: 18 }
    ],
    'age'
));

// Swap keys & values
function swapKV(obj) {
    let swapped = {};
    for (let key in obj) {
        swapped[obj[key]] = key;
    }
    return swapped;
}
console.log(swapKV({ name: 'suraj', age: 17 }));

// Nested object value finder
function getNested(obj, path) {
    return path.split('.').reduce((acc, key) => {
        return acc ? acc[key] : undefined;
    }, obj);
}
let data = { a: { b: { c: 10 } } };
console.log(getNested(data, "a.b.c"));

console.log('day 54 ended');
