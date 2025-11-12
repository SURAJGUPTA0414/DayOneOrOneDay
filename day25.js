console.log("Day 25 started");
//1
// function generateAtoZ() {
//   // your solution here
//   let word = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let x = [];
//   for (let i = 0; i <= word.length - 1; i++){
//   x.push(word[i])
//   }
//   console.log(x)
// }

// generateAtoZ()

// function generateAtoZ() {
//   console.log('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
// }

// generateAtoZ();

//2

// function countEvens(arr) {
//   // your solution here
//   let even = [];
//   for(let x of arr){
//      if(x%2 === 0){
//          even.push(x)
//      }
//   }
//   console.log(even.length)
  
// }

// countEvens([2,3,9,-3,6,-8])

//3
// count negative

// function countNegatives(arr) {
//   // implement your solution here
//   let neg = []
//   for(let dd of arr){
//       if(dd<0){
//           neg.push(dd)
//       }
//   }
//   console.log(neg.length)
// }

// countNegatives([2,3,9,-3,6,-8])


//4
// function checkVotingEligibility(age) {
//   // implement your solution here
//  console.log(age>18 ? 'eligibel' : 'not eligible');
// }

// checkVotingEligibility(11)
//5
//custom sort

function customSort(arr) {
    let str = [];
    let num = [];
  
    for (let x of arr) {
      if (typeof x === 'number') {
        num.push(x);
      } else {
        str.push(x);
      }
    }
  
    // Sort both arrays
    str.sort();
    num.sort((a, b) => a - b);
  
    return [...str, ...num]; // ✅ Combine and return
  }
  
  const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
  console.log(customSort(input)); // [ 'a', 'c', 'e', 'g', 's', 1, 2, 5, 6 ]

console.log("Day 25 ended done");