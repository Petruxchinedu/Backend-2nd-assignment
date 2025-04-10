// 1. Create variables for name, age, nationality and form a sentence
let name = "Peter";
let age = 27;
let nationality = "Nigerian";

let greeting = "Hello, my name is " + name + ". I am " + age + " years old and I am " + nationality + ". Nice to meet you!";
console.log(greeting);

//Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.
let quote = "The only limit to our realization of tomorrow is our doubts of today.";
console.log(quote.toUpperCase()); // Uppercase
console.log(quote.toLowerCase()); // Lowercase

//3.Take a word and rearrange it in reverse order, then log the reversed word.
let word = "JavaScript";
let reversedWord = word.split("").reverse().join("");
console.log(reversedWord); 

//4.Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.
let item1Price = 17.99;
let item2Price = 23.50;
let item3Price = 9.99;
let totalPrice = item1Price + item2Price + item3Price;
console.log("The total price of the items is $" + totalPrice.toFixed(2) + ".");

//5.Find the average of 5 test scores stored in variables. Display the average with a message.
let score1 = 85;
let score2 = 90;
let score3 = 78;
let score4 = 88;
let score5 = 92;
let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
console.log("The average score is " + averageScore.toFixed(2) + ".");

//6.Create an array of your 5 favorite foods. Display the first and last items in the array.
let favoriteFoods = ["Rice", "Beans", "Yam", "Indomie", "Spaghetti"];
console.log("First favorite food: " + favoriteFoods[0]); 
console.log("Last favorite food: " + favoriteFoods[favoriteFoods.length - 1]); 

//7.Add two more food items to the list: one at the beginning and one at the end. Display the new list.
favoriteFoods.unshift("MoiMoi"); // Add to the beginning
favoriteFoods.push("Akara"); // Add to the end


let jssOne = ["John", "Mary", "Peter", "Jane", "Paul", "Sarah", "David", "Emma", "Chris", "Kate"];
let jssTwo = ["Michael", "Sophia", "James", "Olivia", "Liam", "Ava", "Noah", "Isabella", "Lucas", "Mia"];
let jssThree = ["Ethan", "Yemi", "Zainab", "Ada", "Ben", "Clara", "William", "Ella", "Daniel", "Grace"];

console.log("JSS One:", jssOne);
console.log("JSS Two:", jssTwo);
console.log("JSS Three:", jssThree);

