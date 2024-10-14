let nums = [10, 20, 5, 7 , 40, 50, 60, 70, 80, 90, 100];
console.log(nums);

// map use the all element perform any operation on array return 
let mapped = nums.map((item) => { return (item * 4)});
console.log(mapped);

// filter use return a array of element follow the condition 
let filter = nums.filter((item) => { return (item > 8)});
console.log(filter);

// find use return a element according to condition 
let find = nums.find((item) => { return (item > 8)});
console.log(find);

// every use return true if and if all element follow the condition 
let every = nums.every((item) => { return (item > 10)});
console.log(every);

// some use return true if and only one of element follow the condition
let some = nums.some((item) => { return (item > 9)});
console.log(some);

// sortascending use sort the array of number ascending order
let sortascending = nums.sort((a , b) => {return (a - b) });
console.log(sortascending);

// sortdescending use sort the array of number descending order
let sortdescending = nums.sort((a , b) => { return (b - a)});
console.log(sortdescending);

// sort the array of string in ascending order 
let fruit = ["Apple", "Mango", "Orange", "Watermelon", "Pineapple"];
 
let sorted = fruit.sort((a , b) => { return (a.localeCompare (b))});
console.log(sorted);

// sort the array of string in descending order 
let sortted = fruit.sort((a , b) => { return (b.localeCompare (a))});
console.log(sortted);

// remove nested array from array
let nested = [2, 45, 78, [3, 90, 50 , [4 , 5 , 23], 20], 89, 0];

let nestedflat = nested.flat();
console.log(nestedflat);
