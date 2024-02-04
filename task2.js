/*
task-2
Take a number if the number is odd multiply it by 2 and return the result. 
If the number is even divide it by two and return the result.

*/

function oddOrEven( num1){
    if(num1 %2===0 && num1*2){
           let result=('odd' , num1)
          return result;
    } if(num1%2===1 &&num1/2){
        let result=('even',num1)
        return result
    }
}
oddOrEven( 72)
 oddOrEven(91)
// let output=oddOrEven(72)

  //console.log(`number is`,output)
   console.log(`number is`, oddOrEven(72));
   console.log(`number is`,oddOrEven(91));