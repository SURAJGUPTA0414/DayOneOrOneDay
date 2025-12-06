console.log("Day 49 started");

// 1 Reverse a string

// function reversestr(str){
//     console.log(str.split('').reverse().join(''))
// }

// reversestr('suraj')

//2 Check if a string is a palindrome

// function palindrome(str){
//     if(str === str.split('').reverse().join('')){
//         console.log('palindrome')
//     }else{
//         console.log('not palindrome')
//     }
// }
// palindrome('madam')
// palindrome('suraj')

//3
// Count vowels in a string

// function countvowel(str){
    
//     console.log(str.match(/[aeiou]/gi).length)
    
// }

// countvowel('suraj')

//4
// Remove vowels from a string

// function removevowel(str){
   
//     let y = str.match(/[aeiou]/gi);
    
//     let dd = [...str,...y]
//     let ff = dd.filter((a)=> dd.indexOf(a) === dd.lastIndexOf(a) );
//     console.log(ff.join(''))
// }

// removevowel('suraj')
// removevowel('ram')

//5
// Count uppercase & lowercase letters

// function countUpperandLower(str){
    
//     let upper = str.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g);
//     // console.log(upper)
    
//     let lower = str.match(/[abcdefghijklmnopqrstuvwxyz]/g)
    
//     console.log('uppercase count is:',upper.length,'lowercase count is:',lower.length)
    
// }
// countUpperandLower('SURaj123')

//6
// Find longest word in a sentence

// function longestwordinsentence(words){
//     let word = words.split(' ');
//     let length = []
    
//     console.log(word)
//     for(let ff of word){
//         length.push(ff.length)
//     }
    
//     let gg = word.filter((x)=>x.length === Math.max(...length));
//     console.log(gg[0])
// }

// longestwordinsentence('suraj is doing good now');

//7
// Reverse each word in a sentence

// function reverseeachwordinsentence(str){
//     let xx = str.split(' ');
//     let y = []
    
//     for(let x of xx){
        
//         y.push(x.split('').reverse().join(''))
//     }
//     console.log(y.join(' '))
// }

// reverseeachwordinsentence('i love you')


//8
// function reversewordorder(str){
//     let x = str.split(' ')
    
//     console.log(x.reverse().join(' '))
    
// }
// reversewordorder('I love programming very much')

//9
// Find first non-repeating character

// function firstnonrepeatingchar(str){
//     let x = str.split('');
    
//     let dd = x.filter((a)=>x.indexOf(a) === x.lastIndexOf(a))
    
//     console.log(dd[0])
// }

// firstnonrepeatingchar('swiss')

//10
// Character frequency counter

// function charfrecounter(str){
//     let obj={}
//     let x = str.split('');
    
    
//     for(let gg of x){
//         if(obj[gg]){
//             obj[gg]=obj[gg]+1
//         }else{
//             obj[gg] = 1
//         }
//     }
//     console.log(obj)
// }

// charfrecounter('surajgupta')

//11
// Remove duplicate characters

// function removedup(str){
//     let x = str.split('');
    
//     console.log([...new Set(x)].join(''))
// }

// removedup('surajgupta')

//12
// Check if two strings are anagrams

// function anagrma(str1,str2){
//     if(str1.split('').sort().join('') === str2.split('').sort().join('')){
//         console.log('anagram')
//     }else{
//         console.log('not anagrma')
//     }
// }

// anagrma('suraj','shyam')
// anagrma('listen','silent')

//13
// function checkstrcontainesonlydigit(str){
    
    
//     let y = str.match(/[1234567890]/gi);
    
//     if(str.length === y.length){
//         console.log('true','only conatines digit')
//     }else{
//         console.log('false')
//     }
    
// }

// checkstrcontainesonlydigit('45555')

//14
// Capitalize first letter of each word

// function capitalizefirstleeterofeachword(word){
//     let x = word.split(' ');
    
//     let words = []
    
//     console.log(x);
    
//     for(let dd of x){
        
//         let ff = dd.charAt(0).toUpperCase() + dd.slice(1);
//         words.push(ff)
        
//     }
//     console.log(words.join(' '))
// }

// capitalizefirstleeterofeachword('lets have fun')

//15
// Convert snake_case → camelCase

// function convertsnaktocamel(str){
    
//     let caml=[]
  
//     let y = str.replace(/_/gi," ");

    
//     let ff = y.split(' ')
  
    
//     for(let i=0;i<=ff.length-1;i++){
//         let word = ff[i].charAt(0).toUpperCase()+ ff[i].slice(1)
//         caml.push(word)
//     }
//     let final = caml.join('').charAt(0).toLowerCase()+ caml.join('').slice(1)
//     console.log(final)
// }

// convertsnaktocamel('my_variable_name')
// convertsnaktocamel('suraj_gupta')

//improved version of above

// 1 Reverse a string
const reverseStr = str => str.split("").reverse().join("");

// 2 Check palindrome
const isPalindrome = str => str === str.split("").reverse().join("");

// 3 Count vowels
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;

// 4 Remove vowels
const removeVowels = str => str.replace(/[aeiou]/gi, "");

// 5 Count uppercase & lowercase letters
const countUpperLower = str => {
  const upper = (str.match(/[A-Z]/g) || []).length;
  const lower = (str.match(/[a-z]/g) || []).length;
  return { upper, lower };
};

// 6 Find longest word
const longestWord = sentence =>
  sentence.split(" ").reduce((a, b) => (a.length >= b.length ? a : b));

// 7 Reverse each word
const reverseEachWord = str =>
  str.split(" ").map(w => w.split("").reverse().join("")).join(" ");

// 8 Reverse word order
const reverseWordOrder = str => str.split(" ").reverse().join(" ");

// 9 First non-repeating character
const firstNonRepeating = str => {
  for (let ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
  }
  return null;
};

// 10 Character frequency counter
const charFrequency = str =>
  [...str].reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});

// 11 Remove duplicate characters
const removeDuplicates = str => [...new Set(str)].join("");

// 12 Check anagrams
const isAnagram = (s1, s2) => {
  const normalize = s => s.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
  return normalize(s1) === normalize(s2);
};

// 13 Check if string contains only digits
const containsOnlyDigits = str => /^\d+$/.test(str);

// 14 Capitalize first letter of each word
const capitalizeWords = str =>
  str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

// 15 Convert snake_case to camelCase
const snakeToCamel = str =>
  str.replace(/_([a-z])/g, (_, ch) => ch.toUpperCase());


consolelog("Day 49 ended");