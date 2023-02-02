//Write a JavaScript function to count the number of vowels in a given string.

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
let str =
  "Welcome to this session in which you be able to work on some advance functions";
console.log(countVowels(str));

//Write a JavaScript program to test the first character of a string is uppercase or not

const isUppercase = (str) => {
  return str[0] === str[0].toUpperCase();
};
let str1 = "Usama";
if (isUppercase(str1)) {
  console.log("first character of a string is uppercase");
} else {
  console.log("first character of a string is not uppercase.");
}

//Write a JavaScript program to check a credit card number.

function isValidCreditCard(card) {
  // remove spaces and dashes
  card = card.replace(/\s+|-/g, "");

  // check if the input is a number
  if (isNaN(card)) {
    return false;
  }

  // check if the input is not a valid length
  if (card.length < 13 || card.length > 19) {
    return false;
  }

  // use Luhn's algorithm to validate the number
  let sum = 0;
  let shouldDouble = false;
  for (let i = card.length - 1; i >= 0; i--) {
    let digit = parseInt(card[i]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}
let str3 = "346026177797113";
console.log(`Credit card valid or not ${isValidCreditCard(str3)}`);

//second step

function validateCardNumber(cardNumber) {
  let cardNumberArray = cardNumber.split("").reverse().map(Number);
  let sum = 0;
  for (let i = 0; i < cardNumberArray.length; i++) {
    if (i % 2 === 0) {
      cardNumberArray[i] *= 2;
      if (cardNumberArray[i] > 9) {
        cardNumberArray[i] -= 9;
      }
    }
    sum += cardNumberArray[i];
  }
  return sum % 10 === 0;
}
let cre3 = "346026177797113";
console.log(`2nd step Credit card valid or not ${isValidCreditCard(cre3)}`);
//Write a JavaScript program to count number of words in string.

function countWords(str) {
  return str.split(" ").length;
}

let str4 = "Hello, this is a sample string";
console.log(countWords(str4));

//Write a pattern that matches e-mail addresses:
// o The personal information part contains the following ASCII characters.
// ▪ Uppercase (A-Z) and lowercase (a-z) English letters.
// ▪ Digits (0-9).
// ▪ Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// ▪ Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come
// one after the other.

let text = "asd@gmail.com";
let email = /^\w+([\.-]?\w+)*@\w+([\.-]?[a-zA-Z]{2,3})$/;
let result = email.test(text);
console.log(result);
