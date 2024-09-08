// Task 1 = Write a function to convert temperature from Celsius to Fahrenheit.

function celToFer (celTemp) {
    ferTemp = (celTemp * 9/5) + 32   // formula of Cel to Fer(celTemp * 9/5) + 32 
    return ferTemp;
}

const celTemp = celToFer(-2)
//console.log(celTemp)




// Task 2 = You are given an array of numbers. Count how many times the a number is repeated in the array.

function arrRepNum (passArr, number) {
    let store = [];
    for(const num of passArr){
        if(num === number){
            store.push(num)
        }
    }
    return store.length;
}

let numbers = arrRepNum([5, 6, 11, 12, 98, 5], 12);
//console.log(numbers)




// Task 3 = Write a function to count the number of vowels in a string.

function countVowels (string) {                     // initial String

    let vowelBox = [];                              // Storage box for included Vowel

    let check = ['A', 'E', 'I', 'O', 'U'];          // listed all the vowels in CAPS

    for (const str of string.toUpperCase()) {       // calling all the single elements of string with for of.
                                                    // also made the string UpperCase

        if (check.includes(str)){                   // checking our elements of our vowel array matches with the "str" string character

            vowelBox.push(str)                      // if matches push that into Vowel storage box
        }
    }
    return vowelBox.length;                         // returning the .length of vowel box which will count all the number.
}

let findVowel = countVowels("amar babu vaat khai");

// console.log(findVowel)




// Task 4 = Write a function to find the longest word in a given string.


function longestWord (string) {
    let strArr = string.split(' ');
    let maxWord = 'a';

    for (const word of strArr){
        if (word.length > maxWord.length){
            maxWord = word;
        }
    }
    return maxWord;
}

let sentence = longestWord ("I am learning Programming to become a programmer");
//console.log(sentence);




// Task-5 = Generate a random number between 10 to 20.

function randomNum (bet, ween) {

    let randomNUM = Math.floor(Math.random() * (ween - bet + 1) + bet);     // Formula of random number "Math.floor(Math.random() * (max - min + 1) + min)"
                                                                            // this is only for between numbers like 20 to 30, 40 to 80
                                                                            // otherwise Math.floor(Math.random() * 20 (or the number you want till like 1-20 1-30)

    return randomNUM;
}

let randomnum = randomNum(10, 20);

// console.log(randomnum)


// Task-5 = Generate a random number between 10 to 20.

function randomNum (bet, ween) {

    let randomNUM = Math.floor(Math.random() * 20);     // Formula of random number "Math.floor(Math.random() * 20 (or the number you want till like 1-20 1-30)"

    return randomNUM;
}

let randomnuM = randomNum(10, 20);

console.log(randomnuM)
