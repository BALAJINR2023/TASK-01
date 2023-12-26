//The below programs in anonymous function & IIFE
// a.Print odd numbers in an array
//anonymous
const numbers = [1, 2, 3, 4, 5, 6];
let odds=function (){
  const a=[] 
  for(var i = 0 ; i< numbers.length ; i++)
  {
    if(numbers[i]%2!=0)
    {
      
      a.push(numbers[i]);
    } 
  }
  console.log(a);
} 
odds();
//IIFE
(function()
{
  let a=[0,1,2,3,4,5,6,7,8,9];
  let odd= a.filter((num) => num % 2 != 0);
  console.log(odd)
})();
//a.Print odd numbers in an array
//arrow
let b=[1,2,3,4];
let odd=() =>{
  const odds = [];
  b.forEach((num) => {
  if (num%2!=0) 
  {
    odds.push(num);
  }
});
return odds;
}
console.log(odd());
//B.Convert all the strings to title caps in a string array
//anonymous
let str="i am GUVI"
let titleCase=function (){ 
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
    return str.join(' ');
}
console.log(titleCase());
//IIFE
(function() {
  var strings = ("i am guvi").split(" ");
  var titleCaseStrings = strings.map(function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });
  console.log(titleCaseStrings.join(" ")); 
})();
//B.Convert all the strings to title caps in a string array
//arrow
let titleCase1 = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}  
console.log(titleCase1("i am guvi"));
//c.Sum of all numbers in an array
//anonymous
let myNums = [1, 2, 3, 4, 5];
let sum = 0 ;
let s=function (){for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}
console.log(sum);
}
s();
//IIFS
(function() {
  var arr = [1, 2, 3, 4, 5];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum); 
})();
//arrow
let myarra = [1, 2, 3, 4, 5];
let result = 0;
myarra.forEach((item) => {
  result += item;
});
console.log(result);
//d.Return all the prime numbers in an array
//anonymous
let prime=function(numArray){
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}
prime([2,3,4,5]);
//IIFS
(function(numArray){
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 })([3,4,5,6,7,8,9]);
 //arrow
 primeNumber = (numArray) => {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}
primeNumber([2,3,4,5,6,7,8,9,10]);
//e. Return all the palindromes in an array
//anonymous
function isPalindrome(s)
{
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
 let PalindromicStrings=function (arr,N)
{
    let ans = [];
    for (let i = 0; i < N; i++) {
         if (isPalindrome(arr[i])) {
             ans.push(arr[i]);
        }
    }
    return ans;
}
let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
console.log(PalindromicStrings(arr, N));
//IIFE
(function() {
  var arr = ['racecar', 'madam', 'civic', 'hello'];
  var palindromes = arr.filter(function(word) {
    return word === word.split("").reverse().join("");
  });
  console.log(palindromes); 
})();
//TRUE OR FLASE
function checkPalindrome(string) {

  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}
const value = checkPalindrome("madam");
console.log(value);

//arrow
//---this only return all palindroms ----- not checking 
const pali=(words)=>words.filter((word)=>word.split("").reverse().join("")===word);
console.log(pali(["madam","hellow"]));
//f.Return median of two sorted arrays of the same size.
//anonymous
let median=function (arr1, arr2) {
let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
console.log(mergedArray);
  const length = mergedArray.length;
  const median = length % 2 === 0 ? (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2 : mergedArray[Math.floor(length / 2)];
  return median;
}
console.log(median( [1, 3, 5],[2, 4, 6]));
//IIFE
(function() {
    function medianOfTwoSortedArrays(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);
    const length = mergedArray.length;
    if (length % 2 === 1) {
      return mergedArray[Math.floor(length / 2)];
    }
    else {
      return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    }
  }
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  const median = medianOfTwoSortedArrays(arr1, arr2);
  console.log(median);
})();
//g.Remove duplicates from an array
//anonymous
const uniqueArr = function (arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(uniqueArr([1, 2, 3, 4, 5, 1, 2]));
//IIFE
(function() {
  var arr = [1, 2, 3, 1, 2, 4];
  var uniqueArr = Array.from(new Set(arr));
  console.log(uniqueArr); // [1, 2, 3, 4]
})();
//h.Rotate an array by k times
//anonymous
const rotateArray1 = function(nums, k) {
  for (let i = 0; i < k; i++) {
   nums.unshift(nums.pop());
  }
  return nums;
}
console.log(rotateArray1([1,2,3,4,5],1));
//IIFE
(function () {
  function rotateArray(arr, k) {
    k = k % arr.length; 
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, arr.length - k));
    return rotatedArray;
  }
  const originalArray = [1, 2, 3, 4, 5];
  const k = 2;
  const rotatedArray = rotateArray(originalArray, k);
  console.log(rotatedArray);
})();



