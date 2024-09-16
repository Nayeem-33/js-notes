// Task 1 - Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

let num = 1;            // 1 is the number from where looping will start.

while (num <= 40) {     // We can limit loop by condition here we have limited the loop till 40.

  num++;                // This will add 1 after the number gets print we can also write this in 3 ways  
                        // num = num + 1; or num += 1; or num++;

  if((num % 2) != 0) {  // to use continue we can use if as continue is a statement not a function.
    continue;           // we can use continue statement to skip the odd number.
  }
  //console.log(num);     // It will print number
}




// Task 2 - Display odd number from 55 to 85 and skip the numbers divisible by 5.

let num2 = 54;              // 54 is the number from where looping will start.

while (num2 <= 85) {        // We can limit loop by condition here we have limited the loop till 85.

    num2++;                 // This will add 1 after the number gets print we can also write this in 3 ways  
                            // num = num + 1; or num += 1; or num++;
  
    if((num2 % 2) === 0) {  // to use continue we can use if as continue is a statement not a function.
       continue;            // we can use continue statement to skip the even number.
    }
    console.log(num2);      // It will print number

  }