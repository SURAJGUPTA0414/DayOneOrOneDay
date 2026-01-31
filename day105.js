console.log('day105 started');

//1
// max num in arr

// function findmax(arr){
//     let max = arr[0];
    
    
//     for(let dd of arr){
//         if(dd>max){
//             max = dd
//         }
//     }
//     console.log(max)
    
// }

// findmax([1,5,7,11,2,9])


//2
// prime number
// “A prime number is a natural number greater than 1 that has exactly two distinct positive divisors: 1 and itself.”

// function primenum(n){
//     let flag = false
//     for(let i=2;i<n;i++){
//         if(n%i === 0){
//             flag = true;
//             break;
//         }
//     }
//     if(flag){
//         console.log('not prime')
//     }else{
//         console.log('prime')
//     }
// }

// primenum(5)
// primenum(6)

//3
// reverseStringwithout inbuilt method

// function reverseStrwithoutInbuilt(str){
//     let reverse = "";
    
//     for(let i=str.length-1;i>=0;i--){
//         reverse = reverse + str[i]
//     }
//     console.log(reverse)
// }

// reverseStrwithoutInbuilt('suraj')

//4
// find smallest word in sentense

// function smallestword(words){
//     let word = words.split(' ');
//     let smallest = word[0];
    
//     for(let dd of word){
//         if(dd.length<smallest.length){
//             smallest = dd
//         }
//     }
//     console.log(smallest)
// }
// smallestword('i am suraj let do something innovative')

//5
function sumofthirds(arr){
    if(arr.length<3){
        console.log(0)
    }else{
         let sum = 0;

    for(let i=0;i<arr.length;i=i+3){
        sum = sum + arr[i]
        
    }
    console.log(sum)
    }
   
    

}
sumofthirds([1,5,4,6,8,9])
sumofthirds([1,5])


console.log('day105 ended');