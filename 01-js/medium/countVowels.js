/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // return simple_soln(str);
  return using_js_methods_soln(str);
}

function using_js_methods_soln(str) {
  let vowels = 'aeiou';
  return str.toLowerCase().split('')
            .filter((char) => vowels.includes(char))
            .length;
}

function simple_soln(str) {
  str = str.toLowerCase();
  let vowels = 'aeiou';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
