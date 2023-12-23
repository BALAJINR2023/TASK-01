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
let str="i am guvi"
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
prime([1,2,3,4,5]);
//IIFS
(function(numArray){
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 })([1,2,3,4]);
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
primeNumber([1,2,3,4,5,6,7,8,9,10]);
//e. Return all the palindromes in an array
//f.Return median of two sorted arrays of the same size.
//g.Remove duplicates from an array
//h.Rotate an array by k times



