console.log('day 37 done');


//1
// . Count Words in a String


// function countword(str){
//     let words = str.split(' ');
//     console.log(words.length)
// }
// countword('suraj bro hi')

//2
// Find Frequency of Each Character

// function frequencyeachchar(str){
//     let obj = {}
    
//     for(let d of str){
//         if(obj[d]){
//             obj[d] = obj[d] + 1
//         }else{
//             obj[d] = 1
//         }
//     }
//     console.log(obj)
// }

// frequencyeachchar('surahs')

//3
// Find Intersection of Two Arrays

// function intersection(arr1,arr2){
    
//     let inter = [];
    
//     for(let ff of arr1){
//         for(let gg of arr2){
//             if(ff === gg){
//                 inter.push(ff)
//             }
//         }
//     }
//     console.log([...new Set(inter)])
    
// }
// intersection([1,2,3,4,10,3], [3,4,5,6,10])

//4
// union of arr;

// function union(arr1,arr2){
//     let union = [...arr1,...arr2];
//     console.log([...new Set(union)])
    
// }
// union([1,2,3,4,10,3], [3,4,5,6,10])

//5
//Find GCD (Greatest Common Divisor)
function gcd(a,b){
    let d = [a,b];
    let gcd = []
    for(let i=1;i<=Math.max(...d);i++){
        if(a%i ===0 && b%i === 0){
            gcd.push(i)
        }
    }
    console.log(gcd[gcd.length-1])
}

gcd(48, 18);
gcd(56, 98); // 14
gcd(270, 192);
gcd(81, 27); // 27


console.log('day 37 ended');