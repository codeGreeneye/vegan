const fruits = [ "apple", "orange", "kiwi", "watermelon"]
let x;
x = fruits.includes("apple");
x = fruits.indexOf("apple");
x = fruits.slice();
console.log(fruits);



const numbers =[1, 2, 3, 4, 5, 6];
Number.splice(3, 0, "ABCD");
console.log(numbers);

numbers.splice(3, 1);
console.log(numbers);

 numbers.splice(2, 3);
 console.log(numbers)