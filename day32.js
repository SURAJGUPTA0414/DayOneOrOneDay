console.log('day 32 started');

//1
// capitalize first letter of each word in a string
//1
// function firstwordcapitalize(str){
  
//     let xx = str.split(' ')
//       console.log(xx);
      
//       for(let dd of xx){
//           let gg = dd.split('')
//         //   console.log(gg)
//           gg[0] = gg[0].toUpperCase();
//           console.log(gg.join(''))
//       }
// }

// firstwordcapitalize('i am suraj')

//2

// check if string is palindrome ignoring spaces and cases

// function checkpalindrome(str){
//     let x = str.replace(/\s+/g, '').toLowerCase();
//     let y = x.split('').reverse().join('');         
//     if(x === y){
//         console.log('palindrome')
//     }   else{       
//         console.log('not palindrome')
//     }
// }

// checkpalindrome('A man a plan a canal Panama')
// checkpalindrome('suraj bhai')
// checkpalindrome('madam');

//3
// Count vowels and consonants in a string

// function countvoweladnconsonant(str){
//     let vowel = str.match(/[aeiou]/gi);
//     let consonents = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)
    
//     console.log('vowel count:',vowel.length,'consonant count:',consonents.length)
// }

// countvoweladnconsonant('iam suraj')

//4
// Find the longest word in a string

// function longestwordinstr(str){
//     let word = str.split(' ');
//     let lengthofeachword = []
//     for(let dd of word){
//       lengthofeachword.push(dd.length)
//     }
    
//     let maxword = word.find((x)=>x.length === Math.max(...lengthofeachword));
//     console.log(maxword)
// }

// longestwordinstr('i am suraj dsfsgsdgs d')


//5
// Remove duplicate characters from a string

// function removedup(str){
//     let x = [...new Set(str)]
//     console.log(x.join(''))
// }

// removedup('programming')




console.log('day 32 ended');