//●	Write a program to find the area of a triangle where the length of the sides is 2, 3 and 4.

function triangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

let q = 20,
  w = 30,
  e = 40;
let area = triangleArea(q, w, e);
console.log(
  "The area of a triangle with sides " + q + ", " + w + ", " + e + " is " + area
);

//●	Write a program to determine whether a given year is a leap year in the Gregorian calendar

function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

let year = 2024;
if (isLeapYear(year)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

//●	Write a program that will calculate quadratic equations ax^2 + bx + c. You set any value to a, b and c.

function calculateRoots(a, b, c) {
  let delta = b * b - 4 * a * c;

  if (delta > 0) {
    let root1 = (-b + Math.sqrt(delta)) / (2 * a);
    let root2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [root1, root2];
  } else if (delta === 0) {
    let root = -b / (2 * a);
    return [root];
  } else {
    return [];
  }
}

let x = 1,
  y = -5,
  z = 6;
let roots = calculateRoots(x, y, z);
console.log(
  "The roots of the equation " + x + "x^2 + " + y + "x + " + z + " are " + roots
);

//●	Write a program in which you have to display the number in sorted order. You don’t have to sort through any arrays but you need to use nested if else clause to display the number in sorted order inside the Browser console. You can use Boolean operators to compare the number. Declare and initialize three variables a =3, b= 1 and c = -1.

let a = 3;
let b = 1;
let c = -1;

if (a >= b && a >= c) {
  if (b >= c) {
    console.log(c, b, a);
  } else {
    console.log(b, c, a);
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    console.log(c, a, b);
  } else {
    console.log(a, c, b);
  }
} else {
  if (a >= b) {
    console.log(b, a, c);
  } else {
    console.log(a, b, c);
  }
}
