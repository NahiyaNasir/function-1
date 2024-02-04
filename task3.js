/*  Task-3
Write a function called make_avg() which will take an array
 of integers and the size of that array and return the average of those values.

*/
 
  const number=[5, 9, 8, 6, 1,0,  ]
  const numberSize=5;
  function make_avg(array, size) {
    let sum=0
     for(let i=0;  i<size; i++){
         sum= sum+array[i]
           result= sum/size
     }
       return result
    
  }
   console.log( ` averagr of those values`,make_avg(number, numberSize))
