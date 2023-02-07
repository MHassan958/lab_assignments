//●	Write a program to find reverse a given string using JavaScript?

function reverseString(str) {
  return str.split("").reverse().join("");
}

let originalString = "Hello World";
let reversedString = reverseString(originalString);

console.log(reversedString); // outputs "dlroW olleH"

//●	Write a program to Find the sum of all elements/numbers of a given array?  [1,3,4,6,7]

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let numbers = [1, 3, 4, 6, 7];
let result = sumArray(numbers);

console.log(result); // outputs 21

//●	Write a program that to find the most frequent item of an array? [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequentItem(arr) {
  let frequency = {};
  let maxItem = arr[0];
  let maxCount = 1;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    frequency[item] = frequency[item] + 1 || 1;

    if (frequency[item] > maxCount) {
      maxItem = item;
      maxCount = frequency[item];
    }
  }

  return maxItem;
}

let items = [3, "a", "a", "a", 3, "a", 3, "a", 2, 4, 9, 3];
let result1 = mostFrequentItem(items);

console.log(result1); // outputs "a"

//●	●	Write a JavaScript function that returns the longest palindrome in a given string.
function longestPalindrome(str) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substring = str.slice(i, j);
      let reversed = substring.split("").reverse().join("");
      if (substring === reversed && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
}

let string = "babadbababababababbabababa";

console.log(longestPalindrome(string));

//●	Write a function in JavaScript that take array as an input. It check if the element of the number is integer then it calls another function that will add this number with previous one and return the sum and store it in an integer array. If it is string than it calls a function that will concat() strings and with the previous one and strong in another array. When the array is exhausted it should return both integer and string array

function processArray(arr) {
  let intSum = [];
  let strConcat = [];
  let intIndex = 0;
  let strIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && Number.isInteger(arr[i])) {
      intSum[intIndex] = addInt(intSum[intIndex - 1], arr[i]);
      intIndex++;
    } else if (typeof arr[i] === "string") {
      strConcat[strIndex] = concatStr(strConcat[strIndex - 1], arr[i]);
      strIndex++;
    }
  }

  return { intSum, strConcat };
}

function addInt(prevInt, currInt) {
  if (!prevInt) return currInt;
  return prevInt + currInt;
}

function concatStr(prevStr, currStr) {
  if (!prevStr) return currStr;
  return prevStr + currStr;
}

let arr = [1, 2, "Hello", 3, "World"];
let result2 = processArray(arr);
console.log(result2.intSum); // [1, 3, 6]
console.log(result2.strConcat); // ["Hello", "HelloWorld", "HelloWorldWorld"]
