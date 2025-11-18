console.log('day 32 started');

//1
// capitalize first letter of each word in a string
//1
function firstwordcapitalize(str){
  
    let xx = str.split(' ')
      console.log(xx);
      
      for(let dd of xx){
          let gg = dd.split('')
        //   console.log(gg)
          gg[0] = gg[0].toUpperCase();
          console.log(gg.join(''))
      }
}

firstwordcapitalize('i am suraj')




console.log('day 32 ended');