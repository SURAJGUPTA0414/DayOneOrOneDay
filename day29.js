console.log('day 29 started');

//alpna p

//1 reverse a string

// function reversestr(str){
//     console.log(str.split('').reverse().join(''))
// }

// reversestr('reversestr')

//2 check if a string is a palindromne

// function strpalindrom(str){
//     if(str === str.split('').reverse().join('') ){
//         console.log('palindrom')
//     }else{
//         console.log('not palindrom')
//     }
// }

// strpalindrom('suraj')
// strpalindrom('madam')

//3
// remove duplicate from string

// function removedupinstr(str){
//     let dd = str.split('');
//     let removedup = [...new Set(dd)]
//     console.log(removedup.join(''))
// }
// removedupinstr('skskksslsjjuje')

//4
//find first non repeting char

// function firstnonrepchar(str){
//     let x = str.split('')
    
//     let nonrepchar = x.filter((a)=> x.indexOf(a) === x.lastIndexOf(a))
//     console.log(nonrepchar[0])
    
// }

// firstnonrepchar('surajssks')

//5 
//count the occurance of each char

// function counteachchar(str){
    
//     let obj = {}
    
//     for(let x of str){
       
//         if(obj[x]){
//             obj[x] = obj[x] +1
//         }else{
//             obj[x] = 1
//         }
//     }
//      console.log(obj);
    
    
// }

// counteachchar('surajlahua')

console.log('day 29 ended');