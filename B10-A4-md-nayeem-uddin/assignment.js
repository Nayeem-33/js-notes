function calculateTax(income, expenses) {
  if (
    typeof income !== "number" ||
    expenses > income ||
    income < 0 ||
    typeof expenses !== "number" ||
    expenses < 0
  ) {
    return "Invalid Input";
  }
  let totalIncome = income - expenses;

  const tax = totalIncome * 0.2;

  return tax;
}

function sendNotification(email) {
  if (email.includes("@")) {
    let splitEmail = email.split("@");
    let notyFi = splitEmail[0] + " sent you an email from " + splitEmail[1];
    return notyFi;
  } else {
    return "Invalid Email";
  }
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  const allTheNumber = "012345678";
  const stringToArray = name.split("");

  for (let i = 0; i < stringToArray.length; i++) {
    if (allTheNumber.includes(stringToArray[i])) {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(object) {
  if (typeof object === "object" && !Array.isArray(object)) {
    if (
      typeof object.name === "string" &&
      typeof object.testScore === "number" &&
      typeof object.schoolGrade === "number" &&
      typeof object.isFFamily === "boolean" &&
      object.testScore <= 50 &&
      object.schoolGrade <= 30
    ) {
      if (object.isFFamily === true) {
        let TotalScore = object.testScore + object.schoolGrade + 20;
        return TotalScore >= 80;
      } else {
        let TotalScore = object.testScore + object.schoolGrade;
        return TotalScore >= 80;
      }
    } else {
      return "Invalid Input";
    }
  } else {
    return "Invalid Input";
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
    let personBeforeHer = serialNumber - 1 - waitingTimes.length;
    let totalTimeGone = 0;
    for (const mins of waitingTimes) {
      totalTimeGone = totalTimeGone + mins;
    }
    return Math.round(totalTimeGone / waitingTimes.length) * personBeforeHer;
  } else {
    return "Invalid Input";
  }
}
