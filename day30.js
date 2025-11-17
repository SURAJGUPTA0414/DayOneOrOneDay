console.log('day 30 started');
//alpa p


//1 reverse a word in a sentence

function reversewordinsentence(word){
    let x = word.split(' ');
    // console.log(x)
    let reverse = [];
    
    for(let ff of x){
        
        let x = ff.split('').reverse().join('');
        // console.log(x);
        reverse.push(x)
    }
    console.log(reverse.join(' ').toUpperCase())
    
}

reversewordinsentence('the sun is shinny')


//2 find the largest word in a sentence

function largestword(str){
    let word = str.split(' ')
    let max = []
    for(let xx of word){
        // console.log();
        max.push(xx.length)
    }
    
    
    let x = word.find((x)=>x.length === Math.max(...max));
    console.log(x)
}

largestword('the world is yours!!! shyambrosksksksk')

//3 count the vowel in a string


// function countVowel(str){
//     let vowels = str.match(/[aeiou]/gi);
//     console.log(vowels.length)
// }

// countVowel('surajbhai')

//4 check if two strings are anagram

// function checkanagram(str1,str2){
//     let a = str1.split('').sort().join('');
//     let b = str2.split('').sort().join(''); 
//     if(a === b){
//         console.log('anagram')
//     }else{
//         console.log('not anagram')
//     }       
// }

// checkanagram('listen','silent')
// checkanagram('hello','billion')

//5 find the missing number in an array of 1 to n

function missingnuminarr(arr){
    let dd = [...arr]
    for(let i=1;i<=Math.max(...arr);i++){
        // console.log(i);
        dd.push(i)
    }
    let missing = dd.filter((a)=>dd.indexOf(a) === dd.lastIndexOf(a))
    console.log(missing)
}

missingnuminarr([1,3])
missingnuminarr([2,4,1,6,3,7,8])








console.log('day 30 ended');