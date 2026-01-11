console.log('day85 started');

let arr = [1,5,2,10,3];


function findelement(arr,element){
    for(let i=0;i< arr.length;i++){
        if(arr[i] === element){
           return i
        }
    }
    return -1
    
    
}

console.log(findelement(arr,0));

//2
function negativeinarr(arr){
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++
        }
    }
    return count
}

console.log(negativeinarr([1,5,-3,5,1,-6]))

//3
function largestinarr(arr){
    // let largest = arr[0];
    let largest = -Infinity;
    
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}


console.log(largestinarr([1,0,-4,33]))

//4

function smallestinarr(arr){
    let smallest = arr[0];
    // let smallest = Infinity;
    
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i]
        }
    }
    return smallest
}


console.log(smallestinarr([1,0,-4,33]))

//5

function secondlargestinarr(arr){
       if(arr.length<2) return "Array shoul have 2 element"
    let firstlargest = -Infinity;
     let secondlargest = -Infinity;
    
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstlargest){
            
            secondlargest = firstlargest
            firstlargest = arr[i]
        }else if( arr[i]>secondlargest && arr[i] !== firstlargest){
            secondlargest = arr[i]
        }
    }
    return secondlargest
}


console.log(secondlargestinarr([1,0,-4,33,7,33]))

console.log(secondlargestinarr([1]))

console.log('day85 ended')