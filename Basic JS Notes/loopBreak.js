// Task 1 = Write a loop 1 to 200. Use break to exit the loop once you find 100.

let num = 1;            // 1 is the number from where looping will start.

                        // As we know loop can run for infinite
while (num <= 200) {    // Still we can limit loop by condition here we have limited loop till 200

  console.log(num);     // It will print number

  num++;                // This will add 1 after the number gets print we can also write this in 3 ways  
                        // num = num + 1; or num += 1; or num++;

  if (num > 100) {      // to use break we can use if as break is a statement not a function.
    break;              // we can use break statement to break the loop after 100
  }
}




//Task 2 = Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let num2 = 1;           // 1 is the number from where looping will start.
                        
let sum2 = 0;           // We have taken '0' as the start value 0+1, 1+2, 3+3, 6+4 ....

while (num2) {          // We didn't gave any conditions this will let the loop run forever

  sum2 = sum2 + num2;   // this will add the new number with the latest total sum 0+1, 1+2, 3+3, 6+4 ....

  num2++;               // This will add 1 after the number completes a loop.

  if(sum2 >= 200) {        // When the sum reaches 200 or + it will break the loop.
    break;
  }
}

console.log('Total Sum is:',sum2)




// Task 3 = Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

let num3 = 1;                           // 1 is the number from where looping will start.

while (num3 <= 100) {                   // Still we can limit loop by condition here we have limited loop till 100.
  
  let squareNum3 = Math.sqrt(num3);     // Calculating the square root of the num3 Values

  if (Number.isInteger(squareNum3)) {   // If break is the Number (Square Root) is integer as integer means perfect square.

    console.log('Number is:', num3);    // It will print the number / latest value of num3

    console.log('Root is:', squareNum3);    // It will print the root of num3's latest value.
    break;
}

  num3++;                           // This will add 1 if the loop continues.

}