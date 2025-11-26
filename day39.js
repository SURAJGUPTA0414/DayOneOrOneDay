console.log("Day 39 started");

//    ****
//   ****
//  ****
// ****




// function pattern(n){
    
//     for (let i = 1; i <= n; i++){
//         let str = "";
//         for (let j = 1; j <= n - i; j++){
//             str = str + " "
//         }
//         for (let j = 1; j <= n; j++){
//             str = str + "*"
//         }
//         console.log(str)
//     }
    
// }


//2
//   *
//  ***
// *****


// for(let i=1;i<=3;i++){
//     let str = "";
//     for(let j=5;j<=7-i;j++){
//         str = str + " "
//   }
//     for(let j=5;j<=i+4;j++){
//          str = str + "*"
//     }
//     for(let j=5;j<=i+3;j++){
//          str = str + "*"
//     }
//     console.log(str)
// }


//3
// inverted pyramid 
// *****
//  ***
//   *


// for(let i=3;i>=1;i--){
//     let str = "";
//     for(let j=7-i;j>=5;j--){
//         str = str + " "
//   }
//     for(let j=i+4;j>=5;j--){
//          str = str + "*"
//     }
//     for(let j=i+3;j>=5;j--){
//          str = str + "*"
//     }
//     console.log(str)
// }

//4
// combine both 
// star pattern

// for(let i=1;i<=3;i++){
//     let str = "";
//     for(let j=5;j<=7-i;j++){
//         str = str + " "
//   }
//     for(let j=5;j<=i+4;j++){
//          str = str + "*"
//     }
//     for(let j=5;j<=i+3;j++){
//          str = str + "*"
//     }

//     console.log(str)
// }

// for(let i=2;i>=1;i--){
//     let str = "";
//     for(let j=7-i;j>=5;j--){
//         str = str + " "
//   }
//     for(let j=i+4;j>=5;j--){
//          str = str + "*"
//     }
//     for(let j=i+3;j>=5;j--){
//          str = str + "*"
//     }
//     console.log(str)
// }


//5

// *
// **
// ***
// ****
// *****


// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=5;j<=i+4;j++){
//         str = str + "*"
//     }
//     console.log(str)
// }




console.log("Day 39 ended");