console.log('day 87 started');

// 🟦 MAP (Transforms data → same length array)
// 1️⃣ Double all numbers
// [1, 2, 3, 4]


// 👉 Output:

// [2, 4, 6, 8]

// function double(arr){
//     let doubled = arr.map((x)=>x*2);
//     return doubled
// }

// console.log(double([2,4,6,8]))

// 2️⃣ Convert array of strings to uppercase
// ["react", "js", "node"]

// function upperCase(arr){
//     let upperCase = arr.map((x)=>x.toUpperCase());
//     return upperCase
// }

// console.log(upperCase(["react", "js", "node"]))

// 3️⃣ Extract names from objects
// [
//   { name: "Suraj", age: 25 },
//   { name: "Amit", age: 28 }
// ]

// function extractName(arr){
//     let names = []
//     arr.map((x)=>names.push(x.name))

// return names

// }

// console.log(extractName([
//   { name: "Suraj", age: 25 },
//   { name: "Amit", age: 28 }
// ]))

// 👉 Output:

// ["Suraj", "Amit"]

// 4️⃣ Add 18% GST to prices
// [100, 200, 300]

// function addGst(arr){
//     // price + (price * 18 / 100)
//     return arr.map(price=>price + (price * 18 / 100))

// }
// console.log(addGst([100, 200, 300]))

// 5️⃣ Convert minutes to seconds
// [1, 5, 10];

// function mintosec(arr){
//     return arr.map((x)=>x*20)
// }

// console.log(mintosec([1, 5, 10]))



// 🟩 FILTER (Selects data → smaller array)
// 6️⃣ Get even numbers
// [1, 2, 3, 4, 5, 6];

// function getEven(arr){
//   return  arr.filter((x)=>x%2 === 0)

// }

// console.log(getEven([1, 2, 3, 4, 5, 6]))

// 7️⃣ Filter numbers greater than 50
// [10, 60, 30, 80, 25]

// function numgreaterthanfifty(arr){
//   return  arr.filter((x)=>x>50)

// }

// console.log(numgreaterthanfifty([10, 60, 30, 80, 25]))

// 8️⃣ Get adults (age ≥ 18)
// [
//   { name: "A", age: 17 },
//   { name: "B", age: 20 }
// ]

// function getadult(arr){
//     return arr.filter((x)=>x.age>18)

// }

// console.log(getadult([
//   { name: "A", age: 17 },
//   { name: "B", age: 20 }
// ]))

// 9️⃣ Remove falsy values
// [0, 1, false, 2, "", 3, null]

// function removeFalse(arr){
//     // return arr.filter(Boolean)
    

// }

// function removeFalse(arr) {
//     return arr.filter(x => {
//         return x !== "" &&
//                 x !== 0 &&
//                x !== false &&
//                x !== null &&
//                x !== undefined &&
//                !Number.isNaN(x);
//     });
// }


// console.log(removeFalse([0, 1, false, 2, "", 3, null]))

// 🔟 Get words with length > 4
// ["React", "JS", "Frontend", "UI"]

// function getwordwithmorethanlengthfour(arr){
//     return arr.filter((x)=>x.length>4)
// }

// console.log(getwordwithmorethanlengthfour( ["React", "JS", "Frontend", "UI"]))


// 🟨 REDUCE (Accumulates → single value / object / array)
// 1️⃣1️⃣ Sum of numbers
// [1, 2, 3, 4]

// function sumofarr(arr){
//     return arr.reduce((acc,currentvalue)=>(acc + currentvalue))

// }

// console.log(sumofarr([1, 2, 3, 4]))

// 1️⃣2️⃣ Find maximum number
// [10, 45, 22, 90]
function findMax(arr){
    return arr.reduce((max,curr)=>{
       return  curr>max ? curr :max
    },arr[0])

}

console.log(findMax([10, 45, 22, 90]))
// 1️⃣3️⃣ Count occurrences
// ["a", "b", "a", "c", "b", "a"]


function countOccurrences(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}

console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));


// 1️⃣4️⃣ Flatten array (1 level)
// [[1, 2], [3, 4], [5]]

function flattenOneLevel(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(curr);
    }, []);
}

console.log(flattenOneLevel([[1, 2], [3, 4], [5]]));


// 1️⃣5️⃣ Total salary
// [
//   { name: "A", salary: 10000 },
//   { name: "B", salary: 15000 }
// ]

function totalSalary(arr) {
    return arr.reduce((total, emp) => {
        return total + emp.salary;
    }, 0);
}

console.log(totalSalary([
  { name: "A", salary: 10000 },
  { name: "B", salary: 15000 }
]));




console.log('day 87 ended')