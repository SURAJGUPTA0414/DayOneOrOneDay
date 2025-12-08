console.log('day51 started');

console.log('day51 started');

//1
// Count consonants

// function countconsonat(str){
//     let consonat = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
//     console.log(consonat.length)
// }
// countconsonat('suraj')

//2
// Check if string is isogram

// function isogram(str){
//     let dd = str.toUpperCase().split('');
//     // console.log(dd)
//     let x = dd.join("").match(/[A-Z]/g);
    
//     let y = [...new Set(x)];
    
//     if(x.length === y.length){
//         console.log('isogram')
//     }else{
//         console.log('not isogrma')
//     }
    
// }
// isogram('letter')
// isogram('background')

//3
// Replace spaces with hyphens

// function replacespacewithhyphen(str){
//     let x= str.replace(/ /g,"-");
//     console.log(x)
// }

// replacespacewithhyphen('suraj is doing good')


//4
// Check if substring exists

function checksubstring(str,substr){
    if(str.includes(substr)){
        console.log('exists')       
    }else{
        console.log('not exists')
    }   
}

checksubstring('hello world','world')
checksubstring('hello world','suraj')

//5
// Find longest substring without repeating characters

function longestsubstringwithoutrepeatingchar(str){
    let maxLength = 0;
    let start = 0;
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i]) && map.get(str[i]) >= start) {
            start = map.get(str[i]) + 1;
        }   
        map.set(str[i], i);
        maxLength = Math.max(maxLength, i - start + 1);
    }   
    console.log(maxLength);
}   
longestsubstringwithoutrepeatingchar('abcabcbb')
longestsubstringwithoutrepeatingchar('bbbbb')
longestsubstringwithoutrepeatingchar('pwwkew')




//6
// Count words in a sentence
// function countword(str){
//     let x = str.split(' ');
//     console.log(x.length)
// }

// countword('i am greate let have fun')

//7
// Convert CamelCase to snake_case

function camelTosnake(str){
let x= str.replace(/([A-Z])/g,"_$1").toLowerCase();
    console.log(x)
}   
camelTosnake('myVariableName')
camelTosnake('surajGupta')


//8
// Remove special characters
// function removespecialcharacter(str){
    
//     let x = str.match(/[A-Za-z0-9]/gi);
//     console.log(x.join(''))
    
    
// }
// removespecialcharacter("he@llo!123")


//9
// Check if two strings are rotations

function checkrotation(str1,str2){
    if(str1.length !== str2.length){
        console.log('not rotation')
        return;
    }
    let finalstr = str1 + str1; 
    if(finalstr.includes(str2)){
        console.log('rotation')
    }else{
        console.log('not rotation')
    }   
}   
checkrotation('abcd','cdab')
checkrotation('abcd','acbd')



//10
// Find most repeated character

// function mostrepeatedchar(str){
//     let xx= str.replace(/ /g,"");
//     let obj = {}
    
//     for(let x of xx){
//          if(obj[x]){
//              obj[x] = obj[x] + 1
//          }else{
//              obj[x] = 1
//          }
//     }
//     console.log(obj)
  
// }
// mostrepeatedchar('i am suraj bro')


//11
// Reverse only letters (keep digits same)

function revesreletter(str){
    let x = str.split('');
    let letters = x.filter((a)=>/[A-Za-z]/.test(a));
    let reversedletters = letters.reverse();
    let result = [];
    
    for(let char of x){
        if(/[A-Za-z]/.test(char)){
            result.push(reversedletters.shift());
        }else{
            result.push(char);
        }
    }   
    console.log(result.join(''))    
}       
revesreletter('a-bC-dEf-ghIj12')
revesreletter('Test1ng-Leet=code-Q!')
    




//12
// Check pangram

// function pangram(word){
//     let x = word.toLowerCase().match(/[a-z]/gi);
//     let ff = [...new Set(x)]
//     console.log(ff);
//     if(ff.length === 26){
//       console.log('pangram')
//     }else{
//       console.log('not pangram')
//     }
// }
// pangram('Pack my box with five dozen liquor jugs')
// pangram('hi')


//13
// Remove whitespace

// function removewhitespace(str){
    
//     let x = str.toLowerCase().match(/[a-z]/gi);
//     console.log(x.join(''))
// }
// removewhitespace('"line1\nline2"')


//14
// Compare two strings ignoring case

// function comparestr(str1,str2){
//     if(str1.toUpperCase() === str2.toUpperCase()){
//         console.log('true')
//     }else{
//         console.log('false')
//     }
    
// }
// comparestr('suraj','shyam');
// comparestr('suraj','SuRaJ')


//15
// Get first repeated character
// function firstrepeatedchar(str){
//     let x = str.split('');
    
//     let dd = x.filter((a)=>x.indexOf(a) !== x.lastIndexOf(a));
//     console.log(dd[0])
// }

// firstrepeatedchar('surajgupta')


console.log('day51 ended')




console.log('day51 ended')