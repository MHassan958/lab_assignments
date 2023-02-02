//●	Write an arrow function expression called greet(). It should accept a single argument representing a person's name. It should return a greeting string as shown below

const greet = (name) => {
  return `Hello ${name}`;
};

//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum /= arr.length;
  return sum;
};

//●	Write an arrow function named dashTwixt2Evens that accepts a number and inserts dashes (-) between two even numbers.
const dashTwixt2Evens = (num) => {
  let str = num.toString();
  let result = "";
  for (let i = 0; i < str.length - 1; i++) {
    result += str[i];
    if (parseInt(str[i]) % 2 === 0 && parseInt(str[i + 1]) % 2 === 0) {
      result += "-";
    }
  }
  result += str[str.length - 1];
  return result;
};

let arr = [2, 4, 23, 7, 3, 8, 22, 44, 66];
console.log(dashTwixt2Evens(arr));

//●	Convert the following JavaScript function declaration to arrow function syntax.

const counterFunc = (counter) => {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }

  return counter;
};

//●	Write a function that would allow you to do this. (Use closures)

function createBase(baseNumber) {
  return function (numToAdd) {
    return baseNumber + numToAdd;
  };
}

var addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

//●	Write anonymous function that will calculate the mean of array of items passed.
const mean = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

//●	Create 2 input holder in like in the previous exercises. Now create a button and on button call a function. This function should add two integer values. But if a string is added to the integer should display the error in the alter box through error handling.

function addIntegers() {
  let x = document.getElementById("num1").value;
  let z = document.getElementById("num2").value;

  if (!isNaN(x) && !isNaN(z)) {
    x = parseInt(x);
    z = parseInt(z);
    console.log(`Sum is ${x + z}`);
  } else {
    console.log("Someone have alphabetic value");
  }
}

//●	Create a function getmonth(month) in which create a list of ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] and check if the month is in the list if not throw error. Now when calling the function try the code where you are calling the function and get the value from <input> html tag and pass to the function. Catch the exception if the is an error.

function getmonth(month) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (!months.includes(month)) {
    throw new Error("Invalid month");
  }
  return month;
}

const checkMonth = () => {
  try {
    const inputMonth = document.getElementById("month_input").value;
    const result = getmonth(inputMonth);
    console.log("The month is:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
