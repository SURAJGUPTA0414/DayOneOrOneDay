console.log('day86 started');

//1 
// capitalize first ketter of word

function capitalize(word){
    let x  = word.split(' ');
    let y = []
    
    for(let ff of x){
        let word = ff.charAt(0).toUpperCase() + ff.slice(1);
        y.push(word)
        
    }
    return y.join(' ')
    
}

console.log(capitalize('surj is a good persron'))
//2 intersection of two arr
// let a = [2,4,5];
// let b = [2,5,8];
// function intersectionoftwoarr(a,b){
//     let intersection = a.filter((x)=>b.includes(x))
//     return intersection
    
// }
// console.log(intersectionoftwoarr(a,b))

//3
// find longest string
// function longeststring(arr){
//     let longest = arr[0];
    
//     for(let dd of arr){
//         if(dd.length>longest.length){
//             longest = dd
//         }
//     }
//     return longest
    
// }

// console.log(longeststring(['suraj','ram','jay']))

//4
// union of arr
// let a = [1,3,4];
// let b = [3,5,2];
// function union(a,b){
    
//     let union = [];
    
//     for(let dd of a){
//         for(let ff of b){
//             if(dd === ff){
//                 continue;
//             }
//         }
//         union.push(dd)
//     }
    
//     return union
    
// }

// console.log(union(a,b))

// console.log([...new Set(a,b)])

//5 remove falsy value

// let arr = [1,"",false,null,undefined,"sruaj"];

// let truthy = [];

// for(let dd of arr){
//     if(dd){
//       truthy.push(dd)
//     }
    
// }
// console.log(truthy)



console.log('day86 ended')