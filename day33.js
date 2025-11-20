console.log('day 33 started');

//remove vowels from string
function removevowelinstr(str){
    let x = str.replace(/[aeiou]/gi,'');
    console.log(x)
}   
removevowelinstr('i am suraj bhai');


//2
function findMax(arr){
    console.log(Math.max(...arr));
}
findMax([10, 25, 3, 99, 42]);

//3
function findMin(arr){
    console.log(Math.min(...arr));
}
findMin([10, 25, 3, 99, 42]);

//4     
function sumOfArray(arr){
    let sum = 0;        
    for(let x of arr){
        sum += x;
    }       
    console.log(sum)        
}
sumOfArray([10, 20, 30, 40]);
//5

function smallestword(str){
    let x = str.split(' ');
    let lengths = [];   
    for(let dd of x){   
        lengths.push(dd.length) 
    }
    let smallest = x.find((x)=>x.length === Math.min(...lengths));
    console.log(smallest)
}   
smallestword('i am the world greatest programmer');


console.log('day 33 started')