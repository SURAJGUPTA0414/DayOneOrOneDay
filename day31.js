console.log('day 31 started');

//1
// check if two string are anagrams

// function checkstranagrams(str1,str2){
//     let a1 = str1.split('').sort().join('')
//     let a2 = str2.split('').sort().join('')
//     console.log(a1,a2)
    
//     if(a1 === a2){
//         console.log('anagram')
//     }else{
//         console.log('it is not a anagram')
//     }
    
// }

// checkstranagrams('listen','silent');
// checkstranagrams('hen','men');


//2
//convert string to an integer

// function stringtointeger(str){
//     console.log(parseInt(str))
    
   
// }

// stringtointeger('suraj1');
// stringtointeger('123d')

//3
// check if string contains only digit 

// function checkstrhasonlydigit(str){
//   if(isNaN(str)){
//       console.log('false')
//   }else{
//       console.log('true')
//   }
// }

// checkstrhasonlydigit('s')

//4
// find shortest word in string


// function shortestwordinstr(str){
//     let x = str.split(' ');
    
//     let smallestword = []
//     for(let dd of x){
//         smallestword.push(dd.length)
//     }
//     console.log(smallestword);
    
//     let cc = x.find((x)=>x.length === Math.min(...smallestword));
//     console.log(cc)
// }

// shortestwordinstr('i am coll')



//5
// find the most frequest char

function mostfreqchar(str){
   let obj = { }
    
    for(let xx of str){
        if(obj[xx]){
            obj[xx] = obj[xx]+1
        }else{
            obj[xx]=1
        }
    }
    console.log(obj);
    
    let keys = Object.values(obj)
    let max = Math.max(...keys);
    
    // remaining logic: find key(s) that match max and print them
    const mostFreqChars = Object.keys(obj).filter(k => obj[k] === max);
    if (mostFreqChars.length === 1) {
      console.log(`Most frequent char: ${mostFreqChars[0]} (count: ${max})`);
    } else {
      console.log(`Most frequent chars: ${mostFreqChars.join(', ')} (count: ${max})`);
    }
}

mostfreqchar('aurbhaikyahalchal')




console.log('day 31 emdeded');