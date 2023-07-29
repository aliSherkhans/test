### Array Questions
##Question 1
Create an array with three elements and print out the second element.

 ``` let array = [1,2,3];
     console.log(array[1]);
 ```

// Question 2
// Create an array with five elements and print out the length of the array.
// let array = [1,2,3,4,5];
// console.log(array.length);

// Question 3
// Create an array with four elements and print out each element using a for loop.
// let array = [1,2,3,4];
// for(let i = 0; i<array.length ;i++){
//     console.log(array[i])
// }

// Question 4
// Create an array with six elements and print out each element using a forEach loop.
// let array = [1,2,3,4,5,6];
// array.forEach((value)=>{
//     console.log(value)
// })

// Question 5
// Create an array with three elements and add a fourth element to the end of the array.
// let array = [1,2,3];
// array.push(4);
// console.log(array)
// Question 6
// Create an array with four elements and remove the second element.
// let array = [1,2,3,4];
// array.splice(1,1)
// console.log(array)
// Question 7
// Create an array with five elements and remove the last element.
// let array = [1,2,3,4,5];
// array.pop();
// console.log(array)
// Question 8
// Create an array with three elements and check if the array includes a specific value.
// let array = [1,2,3];
// console.log(array.includes(2));

// Question 9
// Create an array with five elements and sort the array in ascending order.
// let array = [1,2,13,14,5];
// let ans = array.sort((a,b)=>{
//     return a-b
// })
// console.log(ans)
// Question 10
// Create an array with five elements and sort the array in descending order.
// let array = [1,2,13,14,5];
// let ans = array.sort((a,b)=>{
//     return b-a
// })
// console.log(ans)

// Question 11
// Create two arrays, concatenate them and print out the resulting array.
// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];
// let resultingArray = [];
// console.log(resultingArray.concat(array1,array2))
// Question 12
// Create an array with three elements and convert it to a string.
// let array1 = [1,2,3];
// console.log(array1.toString());

// Question 13
// Create an array with four elements and reverse the order of the elements.
// let array1 = [1,2,3,4];
// console.log(array1.reverse());

// Question 14
// Create an array with five elements and find the index of a specific value.
// let array1 = [1,2,3,4,5];
// let ans = array1.find((value)=>{
//     return value === 5
// })
// console.log(ans)
// Question 15
// Create an array with six elements and slice the array to create a new array with the first three elements.
// let array1 = [1,2,3,4,5,6];
// let newArray = array1.slice(0,3)
// console.log(newArray)
// Question 16
// Create an array with six elements and use the map method to double each element.
// let array1 = [1,2,3,4,5,6];
// console.log(array1.map((value)=>{
//     return value*2
// }))
// Question 17
// Create an array with four elements and use the while loop to calculate the sum of all elements.
// let array1 = [1,2,3,4];
// let sum = 0;
// let i = 0;
// while(i < array1.length){
// sum = sum+array1[i]
// i++
// }
// console.log(sum);
// Question 18
// Create an array with five elements and use the filter method to return only the even numbers.
// let array = [1,2,3,4,5];
// console.log(array.filter((value)=>{
//     return value % 2 === 0
// }))
// Question 19
// Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.
// let arr = [1,2,3];
// console.log(arr.join("-"))
// Question 20
// Create two arrays with three elements each and use the concat method to combine them into a new array.
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let newArray = [];
// console.log(newArray.concat(arr1,arr2))