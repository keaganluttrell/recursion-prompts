/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {
  let arr = array.slice();
  return arr.length > 0 ? arr.shift() + sum(arr) : 0;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
  let arr = [].concat(...array.slice());
  return arr.some(e => Array.isArray(e)) ? arraySum(arr) : sum(arr);
};

// 4. Check if a number is even.
var isEven = function (n) {
  n = Math.abs(n);
  return n === 0 ? true : n === 1 ? false : isEven(n -= 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
  if (n === 0) {
    return 0;
  } else if (n > 0) {
    n--;
    return n + sumBelow(n);
  } else {
    n++
    return n + sumBelow(n);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function (x, y) {
  if (x === y || y - x === 1 || x - y === 1) {
    return [];

  } else if (y - x > 1 && y > x) {
    return [x += 1].concat(range(x, y));

  } else if (x - y < -1 && y < 0 && x < 0) {
    return [x += 1].concat(range(x, y));

  } else if (x - y > 1 && y < 0) {
    return [x -= 1].concat(range(x, y));

  } else if (x - y > 1 && y > 0) {
    return [x -= 1].concat(range(x, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp > 0 && exp % 2 === 0) {
    return (base * base * exponent(base, exp - 2));
  } else if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else if (exp < 0) {
    return (1 / base) * exponent(base, exp + 1).toFixed(4);
  }
}
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
  if (n === 1 || n === 2) {
    return true;
  } else if (n > 2) {
    return powerOfTwo(n / 2);
  } else {
    return false;
  }
};

// 9. Write a function that reverses a string.
var reverse = function (string) {
  if (string.length === 0) {
    return '';
  }
  return string.slice(-1) + reverse(string.slice(0, -1));

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
  string = string.toLowerCase();
  if (string.length === 0) {
    return true;
  } else if (string[0] === string.slice(-1)) {
    return palindrome(string.slice(1, -1));
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
  if (y === 0) {
    return NaN;
  } if (x === 0) {
    return x;
  }
  if (x > 0 && y > 0) {
    if (x < y) return x;
    return modulo(x -= y, y);
  }
  if (x < 0 && y < 0) {
    if (x > y) return x;
    return modulo(x -= y, y);
  }
  if (x < 0 && y > 0) {
    if (x > -y) return x;
    return modulo(x += y, y);
  }
  if (x > 0 && y < 0) {
    if (x < -y) return x;
    return modulo(x += y, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function (x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if ((x > 0 && y > 0) || (x < 0 && y > 0)) {
    return x + multiply(x, y -= 1);
  }
  if ((x < 0 && y < 0) || (x > 0 && y < 0)) {
    return -x + multiply(x, y += 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function (x, y) {
  ct = 0;
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return ct;
  }
  if ((x > 0 && y > 0 && x >= y) || (x < 0 && y < 0 && x <= y)) {
    divide(x -= y, y);
    return ct += 1;
  }
  if ((x < 0 && y > 0 && x <= -y) || (x > 0 && y < 0 && x >= -y)) {
    divide(x += y, y)
    return ct -= 1;
  }
  return ct;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  var max = Math.max(x, y);
  var min = Math.min(x, y);
  if (min === max) {
    return min;
  }
  return gcd(max -= min, min);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
  if (str1.length > 1 && str2.length > 1) {
    if (str1.slice(0, 1) === str2.slice(0, 1)) {
      return compareStr(str1.slice(1), str2.slice(1));
    }
  } else return str1 === str2;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
  if (str.length > 0) {
    return [str.slice(0, 1)].concat(createArray(str.slice(1)));
  } else {
    return [];
  }
};

// 17. Reverse the order of an array
// this method does not mutate original array
// could use pop() and reverseArr(array), but it would mutate
var reverseArr = function (array) {
  //return array.length > 0 ? [array.pop()].concat(...reverseArr(array)) : [];
  if (array.length === 0) {
    return [];
  }
  var l = array.length;
  var last = array.slice(l - 1);
  var slicedArr = array.slice(0, l - 1)
  return [...last].concat(...reverseArr(slicedArr));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
  return length > 0 ? [value].concat(buildList(value, length -= 1)) : [];
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function (n) {
  if (n === 0) {
    return [];
  }
  let val;
  if (n % 3 === 0 && n % 5 === 0) {
    val = 'FizzBuzz';
  } else if (n % 3 === 0) {
    val = 'Fizz';
  } else if (n % 5 === 0) {
    val = 'Buzz';
  } else {
    val = `${n}`;
  };
  return [...fizzBuzz(n - 1), val];
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
// slice will keep the array from mutating
var countOccurrence = function (array, value) {
  if (array.length === 0) {
    return 0;
  }
  let sliced = array.slice();
  let test = sliced.shift();
  if (test === value) {
    return 1 + countOccurrence(sliced, value);
  } else {
    return countOccurrence(sliced, value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
  if (array.length === 0) {
    return [];
  }
  let sliced = array.slice();
  let item = sliced.shift();
  return [callback(item)].concat(rMap(sliced, callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2

var countKeysInObj = function (obj, key) {
  let count = 0;
  if (typeof obj === 'object') {
    for (let item in obj) {
      count += item === key ? 1 : 0;
      count += countKeysInObj(obj[item], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function (obj, value) {
  let count = 0;
  if (typeof obj === 'object') {
    for (let item in obj) {
      count += obj[item] === value ? 1 : 0;
      count += countValuesInObj(obj[item], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, oldKey, newKey) {
  if (typeof obj === 'object') {
    for (let item in obj) {
      if (item === oldKey) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
        replaceKeysInObj(obj[item], oldKey, newKey);
      }
      replaceKeysInObj(obj[item], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (array) {
  if (array.length < 1) {
    return [];
  }
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','truck','banana']); // ['Car','Truck','Banana']
var capitalizeFirst = function (array) {
  if (array.length < 1) {
    return [];
  }
  let cap = array[0].slice(0, 1).toUpperCase() + array[0].slice(1);
  return [cap].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
  let ct = 0;
  if (typeof obj === 'object') {
    for (let item in obj) {
      if (obj[item] % 2 === 0) {
        ct += obj[item];
      }
      ct += nestedEvenSum(obj[item]);
    }
  }
  return ct;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
  let arr = [].concat(...array);
  return arr.some(Array.isArray) ? flatten(arr) : arr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (str, obj = {}) {
  if (str.length < 1) {
    return obj;
  }
  let s = str.slice(0, 1);
  obj[s] ? obj[s] += 1 : obj[s] = 1;
  letterTally(str.slice(1), obj);
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
  if (list.length < 1) {
    return [];
  }
  let ar = list[0] === list[1] ? [] : [list[0]];
  return ar.concat(compress(list.slice(1)));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
  if (array.length < 1) {
    return [];
  }
  let a = array[0];
  if (Array.isArray(a)) {
    a.push(aug);
  }
  return [a].concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
  if (array.length < 1) {
    return [];
  }
  let a = array[0];
  let b = array[1];
  let z = a === 0 && b === 0 ? [] : [a];
  return z.concat(minimizeZeroes(array.slice(1)));

};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
  if (array.length < 1) {
    return [];
  }
  let a = Math.abs(array[0]);
  let b = -Math.abs(array[1]);

  return [a, b].concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
  let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if (str.length < 1) {
    return '';
  }
  let s = str[0];
  if (!isNaN(s) && s !== ' ') {
    s = nums[+s];
  }
  return s + numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
  let ct = 0;
  let parent = node === undefined ? document.body : node;
  if (parent.tagName === tag.toUpperCase()) {
    ct += 1;
  }
  if (parent.hasChildNodes()) {
    parent.childNodes.forEach(n => {
      ct += tagCount(tag, n);
    });
  }
  return ct;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function (array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function (array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {
};
