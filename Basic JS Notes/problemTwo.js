// Task 1 = Find the lowest number in the array below.

function minOfArr (height) {
    let min = height[0];
    for (const hit of height) {
        if (hit < min) {
            min = hit;
        }
    }
    return min;
}

const heights2 = minOfArr([900, 167, 190, 120, 165, 137]);

// console.log(heights2)




// Task -2 Find the friend with the smallest name.

function smallName (nameArr) {
    let smtName = nameArr[0];
    for (const Name of nameArr) {
        if ( smtName.length > Name.length ) {
            smtName = Name;
        }
    }
    return smtName
}

const names = smallName(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
// console.log(names)




// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk

function calculateElectronicsBudget (lapQty, tabQty, mobQty) {
    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let mobilePrice = 20000;

    totalBudget = lapQty * laptopPrice + tabQty * tabletPrice + mobQty * mobilePrice;

    return totalBudget;
}

let myTotalBudget = calculateElectronicsBudget (6,1,50);

// console.log (myTotalBudget)




// Task 4 = You are given an array of phone objects, each containing information about the model,
// brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice
// that takes this array as input and returns the average price of phone.

function findAveragePhonePrice (phones) {
    let sumPhone = 0;
    for (const phone of phones) {
        sumPhone = sumPhone + phone.price;
    }
    return Math.ceil(sumPhone / phones.length);
}


    const avgPrice = findAveragePhonePrice ([
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ]);

    // console.log(avgPrice)




// Task 5 = For each employee their current salary is calculated by multiplying yearly 
// increment with experience then adding the result to the starting salary. Now calculate 
// is the total salary has to be provided by the company in a month.

function monthlyTotalSalary (employeeInfo) {
    let totalMonthlySalary = 0;
    for(const employee of employeeInfo) {
        salaryEmployee = employee.starting + (employee.increment * employee.experience)
        
        totalMonthlySalary = totalMonthlySalary + salaryEmployee
    }
    return totalMonthlySalary;
}
const monthlyTotalSalaryF = monthlyTotalSalary ([
                    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
                    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
                    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
                    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
                  ]);

                  console.log(monthlyTotalSalaryF)