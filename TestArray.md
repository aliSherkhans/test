
# Array Questions
## Question 1
## Create an array with three elements and print out the second element.

```script 
let array = [1,2,3];
console.log(array[1]);
```

## Question 2
## Create an array with five elements and print out the length of the array.
 ```script let array = [1,2,3,4,5];
    console.log(array.length);
```
## Question 3
## Create an array with four elements and print out each element using a for loop.
   ``` script
 let array = [1,2,3,4];
 for(let i = 0; i<array.length ;i++){
console.log(array[i])
      }
```
## Question 4
## Create an array with six elements and print out each element using a forEach loop.
 ```script
 let array = [1,2,3,4,5,6];
 array.forEach((value)=>{
    console.log(value)
 })
 ```

## Question 5
## Create an array with three elements and add a fourth element to the end of the array.

```script
 let array = [1,2,3];
 array.push(4);
 console.log(array)
```
 
## Question 6
## Create an array with four elements and remove the second element.
```script
 let array = [1,2,3,4];
 array.splice(1,1)
 console.log(array)
```

## Question 7
## Create an array with five elements and remove the last element.
```script
 let array = [1,2,3,4,5];
 array.pop();
 console.log(array)
```
## Question 8
## Create an array with three elements and check if the array includes a specific value.
```script
let array = [1,2,3];
 console.log(array.includes(2));
```
## Question 9
## Create an array with five elements and sort the array in ascending order.
```script
 let array = [1,2,13,14,5];
 let ans = array.sort((a,b)=>{
    return a-b
 })
 console.log(ans)
```

## Question 10
## Create an array with five elements and sort the array in descending order.
```script
 let array = [1,2,13,14,5];
 let ans = array.sort((a,b)=>{
    return b-a
 })
 console.log(ans)
```

## Question 11
## Create two arrays, concatenate them and print out the resulting array.
```script
 let array1 = [1,2,3,4,5];
 let array2 = [6,7,8,9,10];
 let resultingArray = [];
console.log(resultingArray.concat(array1,array2))
```
## Question 12
## Create an array with three elements and convert it to a string.
```script
let array1 = [1,2,3];
 console.log(array1.toString());
```

## Question 13
## Create an array with four elements and reverse the order of the elements.
```script
 let array1 = [1,2,3,4];
 console.log(array1.reverse());
```
## Question 14
## Create an array with five elements and find the index of a specific value.
```script
 let array1 = [1,2,3,4,5];
 let ans = array1.find((value)=>{
   return value === 5
 })
 console.log(ans)
```

## Question 15
## Create an array with six elements and slice the array to create a new array with the first three elements.
```script
 let array1 = [1,2,3,4,5,6];
let newArray = array1.slice(0,3)
 console.log(newArray)
```
## Question 16
## Create an array with six elements and use the map method to double each element.
```script
 let array1 = [1,2,3,4,5,6];
console.log(array1.map((value)=>{
   return value*2
 }))
```
## Question 17
## Create an array with four elements and use the while loop to calculate the sum of all elements.
```script
 let array1 = [1,2,3,4];
 let sum = 0;
 let i = 0;
 while(i < array1.length){
 sum = sum+array1[i]
 i++
 }
 console.log(sum);
```
## Question 18
##Create an array with five elements and use the filter method to return only the even numbers.
```script
let array = [1,2,3,4,5];
 console.log(array.filter((value)=>{
     return value % 2 === 0
 }))
```
## Question 19
## Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.
```script
 let arr = [1,2,3];
 console.log(arr.join("-"))
```
 ## Question 20
## Create two arrays with three elements each and use the concat method to combine them into a new array.
```script
 let arr1 = [1,2,3];
 let arr2 = [4,5,6];
let newArray = [];
 console.log(newArray.concat(arr1,arr2))
```

## 21. Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.
```script
let array = ["apple", "banana", "orange"]
 if(array.includes("orange")){
    console.log("yes")
 }
else{
    console.log("no")
 }
```
## 22. Given an array of numbers, write a function that returns the sum of all the even numbers in the array.
```script
 let arr = [1,2,3,4,5,6,7,8,9,10];
 let sum = 0;
 function sumEven(){
    for(let i = 0; i< arr.length ; i++){
        if(arr[i]%2 === 0){
           sum = sum + arr[i]
       }
    } 
        console.log(sum)
 }
 sumEven()
```

## 23. Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.
```script
const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6]
 function uniqueElements(arr1, arr2) {
    const set = new Set([...arr1, ...arr2]); 
    return [...set]; 
   }
   const uniqueArr = uniqueElements(arr1, arr2);
   console.log(uniqueArr); 
```

## 24. Given an array of strings, write a function that returns the longest string in the array.
```script
 let str = ["alisher","wecode","khan","script"]
 let longest = "";
 function longestString(){
     for(let i = 0 ; i <str.length ;i++){
        if(str[i].length > longest.length){
             longest = str[i]
         }
        
     }
     console.log(longest)
 }
 longestString()
```

## 25. Write a function that takes an array of numbers and returns the largest number in the array.
```script
 function largestNumber(array){
    let largest = 0;
    for(let i = 0; i<array.length ; i++){
       if(array[i] > largest){
            largest = array[i]
        }
    }
     return largest
 }
 console.log(largestNumber([1,2,33,44,55,78,44,78,444,876]))
```

## 26. Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.
```script
 function arrayNumbers(arr){
 return arr.filter((num)=>num%2===0)
 }
 console.log(arrayNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,16,75,97]))
```

## 27. Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.
```script
 function filterstring(str){
    return str.filter((str)=>str.length > 5)
 }
 console.log(filterstring(["hallo","hi","sorgaer","wecode","ladnun","acedmey"]))
```

## 28. Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).
```script
 function arrayNumbers(arr1,arr2){
     let intersection = [];
     for(let i = 0 ; i < arr1.length ; i++){
        if(arr2.includes(arr1[i])){
       intersection.push(arr1[i])
         }
    }
     return intersection
 }
 console.log(arrayNumbers([1,2,4,3,5,6,7,9],[3,8,6,4,9,2,1]))
```

 ## 29.Write a function that takes an array of numbers and returns a new array where each element is the square of the original element
```script
 function squareArray(arr){
     let newArray = [];
  for(let i = 0 ; i < arr.length ; i++){
         newArray.push(arr[i]**2)
     }
     return newArray
 }
 console.log(squareArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))
```

## 30. Write a function that takes an array of numbers and returns the average of all the numbers in the array.
```script
 function average(number){
    let sum = 0;
     for(let i = 0 ; i < number.length ; i++){
         sum = sum +number[i]
     }
     return sum/number.length
 }
 console.log(average([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))
```
## 31. Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function
```script
 function filterNumber(array1){
     let newArray = [];
    array1.filter((value)=>{
         if(value > 5){
             newArray.push(value)
         }
    
     })
/     return newArray
    
 }
 console.log(filterNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))
```

 ## 32. Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function
```script
 function arrayNumber(array1){
     let newArray = [];
     array1.map((value)=>{
           newArray.push(value+1)
     })
     return newArray 
 }
 console.log(arrayNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))
```

## 33. Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.

## 34 .Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.
```script
 function arrofstring(str){
     return str.reduce((a,b)=> a+b.length,0)
 }
 console.log(arrofstring(["alisher","wecode","sorgar","ladnun","acadmey"]))
```

##34. Write a function that takes an array of strings and sorts them by their length in ascending order.

 Example usag
 let strings = ["apple", "banana", "cherry", "date"];
 ```script
 function sortStringsByLength(strings){
    return  strings.sort((a,b)=> a.length - b.length)
      }
 console.log(sortStringsByLength(strings))

 console.log(sortStringsByLength(strings)); // Output: ["date", "apple", "cherry", "banana"]
 ```
## 35. Write a function that takes an array of numbers and returns the second highest number.
```script
 function getSecondHighestNumber(numbers) {
   const sortarr = numbers.sort((a,b)=>b-a);
     return sortarr[1]
 }
 console.log(getSecondHighestNumber([1,22,33,44,333,44,56,467,433,566,532,665]))
```

 ## 36. Write a function that takes an array of numbers and returns a new array with all the unique numbers.
```script
 function getUniqueNumbers(numbers) {
    return Array.from(new Set(numbers));
   }
   let numbers = [1, 2, 3, 2, 4, 3, 5];
   console.log(getUniqueNumbers(numbers)); // Output: [1, 2, 3, 4, 5]
```
## 37. Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".
```script
 function getincludeA(str){
    return str.filter((value)=>value.includes("a"))
 }
 console.log(getincludeA(["alisher","hallo","hi","acadmey","sameer"]))
```
## 38. Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
```script
   function sortNumbersAscending(numbers){
     return numbers.sort((a,b)=>a-b);
  }
   console.log(sortNumbersAscending([11,45,7,8,5,4,8,85]))
```
## 39. Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.
 Example usage
 let arr = ['hello', 'world'];
 console.log(flattenStrings(arr)); // Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
 ```
