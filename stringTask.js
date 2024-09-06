

// Task 1 and 2 = Count how many times a string has the letter a

let a = "All amazing animals are always active around autumn."; // Here is the String.

let A = a.toUpperCase()                 // We made the string Upper/Lower to remove all case sensitiveness

let countA = A.split('A').length - 1;   // we have split the string "A", as there will be more array value than "A"s we have counted till Length - 1.

//console.log(countA);                    // Print the result



// Task 3 =  Check whether a string contains all the vowels a, e, i, o, u

// I am calling a, A and countA value from task 1 - 2

let countE = A.split("E").length - 1;
let countI = A.split("I").length - 1;
let countO = A.split("O").length - 1;
let countU = A.split("U").length - 1;

// console.log('Total Vowels =', countA+countE+countI+countO+countU)
// console.log('A =', countA)
// console.log('E =', countE)
// console.log('I =', countI)
// console.log('O =', countO)
// console.log('U =', countU)




// Task 4 = If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.







// Task 5 = Capitalize Every first Letter of each word in a String

const strAr = a.split(' ');                                     // We have converted the string into an array to work with single word.

for(let f = 0; f < strAr.length; f++) {                         // for loop for running a loop till the length (last value) of the array
    strAr[f] = strAr[f][0].toUpperCase() + strAr[f].substr(1);  // "strAr[f]" here f=0,1,2,...8 it refers the index of the array it will run till 8.

                                                                // "strAr[f][0]" here strAr[f(let 1)] refers the array value all and
                                                                // the "[0]" refers the 0 index of "All" word which is "A"
                                                                //.toUpperCase() is used for capitalizing the "A" though it is already Capitalized.

                                                                // we already know what "strAr[f]" stands for but the .substr(1) is given below
                                                                // .substr(1) method is used to extracting portion from specific index of a string,
                                                                // In this case .substr(1) gives us the  portion of each word after the first character of "strAr[f]" array value.
}
let capitalStr = strAr.join(" ");                               // we used join to convert the array again in sentence or string.

// console.log(capitalStr)