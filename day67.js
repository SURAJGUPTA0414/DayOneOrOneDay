console.log("day67 started");

//1
// sai krishna

// function removeDuplicate(arr){
    
//     let x = arr.filter((a,b)=>arr.indexOf(a) === b);
//     console.log(x)
    
// }
removeDuplicate([1,3,2,1,5])

function removeDuplicate(arr){
    let unique = [];

    for(let dd of arr){
        console.log(!unique.includes(dd))
        if(!unique.includes(dd)){
            

            unique.push(dd)
        }
    }
    console.log(unique)



}

//2
// function findEvenNumber(arr){
//     let even = arr.filter((x)=>x%2===0);
//     console.log(even)
// }
// findEvenNumber([1,2,1,4])

//3
// function isPalindrome(str){
//     if(str === str.split('').reverse().join('')){
//         console.log('palindrome')
//     }else{
//         console.log('not palindrome')
//     }
// }

// isPalindrome('madam')

//4
// function factorial(n){
//     let fact = 1;
//     for(let i=1;i<=n;i++){
//         fact = fact * i
//     }
//     console.log(fact)
// }

// factorial(5)


//5
function findLongestString(word){
    let words = word.split(' ');
    
    let longest = words[0];
    
    for(let dd of words){
        if(dd>longest){
            longest = dd
        }
    }
    console.log(longest)
}

findLongestString('suraj is great')

console.log("day67 ended");