/*
Task-5
Write a function called odd_even() which takes an integer value
 and tells whether this value is even or odd. If even return Even. If odd return Odd*/
   
 function odd_even( number){
         console.log(number)
         if(number %2===0){
            console.log(`even `)
            return   true
         } 
             console.log(`odd`)
            return   false
         
 }

  console.log(odd_even(5))
   console.log(odd_even(8))