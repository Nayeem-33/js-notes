// Task 1 = Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];    // Given color array

let revColors = [];                                              // Took a black array to store the value

for(let q = colors.length - 1; q >= 0; q--) {                   // var q = array's last index which is array.length - 1 
                                                                // if ver q >= 0  it will push the colors index [q] 
                                                               
                                                                // after -con1: it will decrement by one and call the index no '[4]'

    revColors.push(colors[q]);                                  // for statement will push the colors index [q] 
                                                                // which is currently '[5]', in the revColors. "-con1"
}

// console.log(revColors);




// Task 2 = Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];        // Given Input

let evenArr = [];

for(let w = 0; w <= numbers.length; w++) {

    if(numbers[w] % 2 === 0) {

        evenArr.push(numbers[w])

    }
}
//console.log(evenArr);




// Task 3 = Use a for...of loop to concatenate all the elements of an array into a single string.

let names = ['Tom', 'Tim', 'Tin', 'Tik'];       // Initial Array

let nameCon ='';                                // Took a blank string to store the result

for(const name of names) {                      // for.....of to take the individual word of names.

    nameCon += name;                            // adding the name with the nameCon also with the help of '=' assigning new value to nameCon
}

// let names = ['Tom', 'Tim', 'Tin', 'Tik'];

// let nameCon + names.join('');

 //console.log(nameCon)




// Task 4 (Hard) = Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person'

let staArr = statement.split(' ');

let revStaArr = [];

for(let f = staArr.length; f >= 0; f--) {
    revStaArr.push(staArr[f])
} 

let revSent = revStaArr.join(' ')


console.log(revSent)