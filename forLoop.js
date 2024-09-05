// Task 1 = I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

for(let p = 1; p <= 60; p++) {    
          // for(initial variable; Condition; increment)
    // console.log('I will invest at least 6 hrs every single day for next 60 days!') // Code to be executed
}




// Task 2 = Subtask-1: Find all the odd numbers from 61 to 100.

for(let x = 60; x <= 100; x++) {

    if((x % 2) === 0){
        continue;
    }

    // console.log(x)
}




// Task 2 = Subtask-2: Find all the even numbers from 78 to 98.

for(let y = 77; y <= 98; y++) {

    if((y % 2) !== 0){
        continue;
    }

    // console.log(y)
}




// Task 3 = Subtask-1: Display sum of all the odd numbers from 91 to 129.

let sum = 0;

for(let z = 90; z <= 129; z++) {

    if((z % 2) === 0){
        continue;
    }
    
    sum = sum + z;
    
    // console.log(sum)
}




// Task 3 = Subtask-2: Display sum of all the even numbers from 51 to 85.

let sumE = 0;

for(let w = 50; w <= 85; w++) {

    if((w % 2) !== 0) {
        continue;
    }

    sumE = sumE + w;

    // console.log(sumE)
}




// Task 4 = Generate a multiplication table for number 9

let numMul = 9;

for(let d = 1; d <= 10; d++) {
    // console.log(numMul + 'X' + d + '=' + (numMul*d) )
}




// Task 5 = Implement a countdown timer that counts down from 81 to 65.

for(let t = 81; t >= 65; t--) {
    // console.log(t)
}