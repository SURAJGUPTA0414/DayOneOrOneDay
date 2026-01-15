console.log('day89 started');


// ****
// ****
// ****
// ****


for(let i=1;i<=4;i++){
    let str = "";
    for(let j=5;j<=8;j++){
        str = str + "*"
    }
    console.log(str)
}

// *
// **
// ***
// ****
// *****

for(let i=1;i<=5;i++){
    let str = "";
    for(let j=1;j<=i;j++){
        str = str + "*"
    }
    console.log(str)
}

// *****
// ****
// ***
// **
// *
console.log('===========================')
for(let i=1;i<=5;i++){
    let str = "";
    for(let j=1;j<=6-i;j++){
        str = str + "*"
    }
    console.log(str)
}


// 1
// 12
// 123
// 1234
// 12345

for(let i=1;i<=5;i++){
    let str = "";
    for(let j=1;j<=i;j++){
        str = str + j
    }
    console.log(str)
}

// 1
// 22
// 333
// 4444
// 55555

for(let i=1;i<=5;i++){
    let str = "";
    for(let j=1;j<=i;j++){
        str = str + i
    }
    console.log(str)
}

//12345
//1234
//123
//12
//1








console.log('day89 ended')