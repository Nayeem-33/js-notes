// Task 1 = Take four parameters. Multiply the four numbers and then return the result

function multiply(num1, num2, num3, num4) {
    let Multiply = num1 * num2 * num3 * num4;
    return Multiply;
}

const result = multiply(2,4,5,8);
//console.log(result)




// Task 2 = Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(num1) {
    if(num1 % 2 === 0) {
        const result = num1 / 2;
        return result;

    } else {
        const result = num1 * 2;
        return result;
    }
}

const result2 = oddEven(15641);
//console.log(result2)




// Task 3 = Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(nums) {
    let sum = 0;
    for(const num of nums){
        sum = sum + num;
    }
    let avg = (sum/ nums.length).toFixed(2);

    return avg
}
 
let sum = make_avg([14,55,74,45,59,56,89,96,32,36,65,4,75,58,47,62])
//console.log(sum)





// Task-4 = Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

let b = '0110100010001000111000'


