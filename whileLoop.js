// Task 1 = "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

let q = 1;          //Initial Number

while(q <= 60) {
    // console.log("I will invest at least 6 hrs every single day for next 60 days!")
    q++;
}




// Task 2 = Subtask-1: Find all
// the odd numbers from 61 to 100.

let w = 60;             //Initial Number

while(w <= 100) {       // As per condition says w(60) <= 100 in will enter into the "if" condition

    if(w % 2 !== 0){    // As per condition says w(60) % 2 (ans 0) !== 0 as 60 even so the condition is false and it will be out from if condition (-continue 2)
                        // After (-continue 3) if the condition is true as w(61) % 2 (ans 1) !== 0 here the condition is true and it will enter in if condition.

        w++;            // After entering if condition it will add 1 and go to the next line of 
        
        continue;       // in the next line it will encounter continue statement and it will skip rest of the code and go to the top of the code and loop.
    }
    w++;                // after (-continue 2) : when w(60) will come to this like this will add a +1 and will make w=61.


    // console.log(w)      // and it will print the odd number 61 and go to the top of the code. (-continue 3)
}




// Task 2 = Subtask-2: Find all the even numbers from 78 to 98.
let e = 77;

while(e <= 98) {
    if(e % 2 === 0) {
        e++;
        continue;
    }

    e++;
    
    // console.log(e)
}




// Task 3 = Subtask-1: Display sum of all the odd numbers from 81 to 131.

let r = 80;                 //Initial Number

let sumR = 0;               // Initial sum value 0 to sum with 'r' latest values

while(r <= 131) {           // As per condition says r(80) <= 100 in will enter into the "if" condition
    if(r % 2 !== 0) {       // Rest of code is run same as Task 2 = Sub Task- 1
        r++;
        continue;
    }
    r++;
    sumR = sumR + r;        // Here is the difference Part the odd number r = 81 what we can find from the previous line will be add with sumR = 0 
                            // after that we will get new 'sumR' value 81 and which will later get add with r latest value 83 (sounds confusing)
}

// console.log('sum:', sumR)   // this will directly print the final sumR result.




// Task 3 = Subtask-2: Display sum of all the even numbers from 206 to 311.

let t = 206;

let sumT = 0;

while(t <= 311) {
    if(t % 2 === 0) {
        t++;
        continue;
    }

    t++;
    sumT = sumT + t;
}
// console.log(sumT)



// Task 4 = generate a multiplication table for number 5

let namata = 5;

let y = 1

while(y <= 10) {
    
    // console.log(y, 'X', namata, '=', (y * namata));
    
    y++;
}



// Task 5 = Implement a countdown timer that counts down from 21 to 15.

let u = 21;

while (u >= 15) {
    console.log(u);
    u--;
}