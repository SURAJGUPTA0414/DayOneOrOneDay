console.log('day 30 started');
//alpa p

//1 reverse a word in a sentence


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




console.log('day 30 ended');