// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

var isPalindrome = function(x) {
  x = String(x);

  if(x[0] === '-'){
    return false;
  }
  else {
    for (let i = 0; i < x.length / 2; i++) {
      if(x[i] !== x[x.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
};

