console.log('day92 started');


//1


// ****
// ****
// ****
// ****

// let n = 4;

// for(let i=0;i<n;i++){
//     let row = ""
//     for(let j=0;j<n;j++){
//         row = row + "*"
        
//     }
//     console.log(row)
// }


//2
// *
// **
// ***
// ****

// let n = 4;

// for(let i=0;i<n;i++){
//     let row = ""
//     for(let j=0;j<i+1;j++){
//         row = row + "*"
        
//     }
//     console.log(row)
// }


//3
// 1
// 12
// 123
// 1234


// let n = 4;

// for(let i=0;i<n;i++){
//     let row = ""
//     for(let j=0;j<i+1;j++){
//         row = row + (j+1)
        
//     }
//     console.log(row)
// }


//4

// 1
// 22
// 333
// 4444


// let n = 4;

// for(let i=0;i<n;i++){
//     let row = ""
//     for(let j=0;j<i+1;j++){
//         row = row + (i+1)
        
//     }
//     console.log(row)
// }

//5
// 1234
// 123
// 12
// 1


let n = 4;

for(let i=0;i<n;i++){
    let row = ""
    for(let j=0;j<n-i;j++){
        row = row + (j+1)

        
    }
    console.log(row)
}




console.log('day92 ended')