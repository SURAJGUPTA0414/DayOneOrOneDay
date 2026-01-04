console.log('start');

//1


// function checkVotingEligibility(age) {
//   if (age >= 18) {
//     return "Eligible to vote";
//   } else {
//     return "Not eligible to vote";
//   }
// }

// module.exports = checkVotingEligibility;



//2find smallest number
// function findSmallest(arr) {

//   if (!Array.isArray(arr)) {
//     return false;
//   }

 
//   if (arr.length === 0) {
//     return null;
//   }

  
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       typeof arr[i] !== 'number' ||
//       !Number.isFinite(arr[i])
//     ) {
//       return false;
//     }
//   }


//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }

//   return smallest;
// }

//3
// count even number

// function countEvens(arr) {
  
//   if (!Array.isArray(arr)) {
//     return false;
//   }

//   let even = [];

//   for (let dd of arr) {
    
//     if (typeof dd !== 'number' || !Number.isFinite(dd)) {
//       return false;
//     }

//     if (dd % 2 === 0) {
//       even.push(dd);
//     }
//   }

//   return even.length;
// }

// module.exports = { countEvens };



//4
// find Max Number

function findMaxNumber(arr) {

  if (!Array.isArray(arr)) {
    return false;
  }

 
  if (arr.length === 0) {
    return null;
  }

  
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] !== 'number' ||
      !Number.isFinite(arr[i])
    ) {
      return false;
    }
  }


  let biggest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }

  return biggest;
}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);


//loop A to Z
//5

// function generateAtoZ() {
//   let result = [];

//   for (let i = 65; i <= 90; i++){
//     result.push(String.fromCharCode(i))
//   }
//   return result
// }


console.log('End');