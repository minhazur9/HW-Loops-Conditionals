// Easy Going
// 1) Write a for loop that will log the numbers 1 through 20.

for(let i = 1; i <= 20; i++) {
    console.log(i);
}

// Get Even
// 1) Write a for loop that will log only the even numbers in 0 through 200.

for(let i = 0; i <= 200; i+=2) {
    console.log(i);
}

// Excited Kitten
// 1) Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// 2) For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

for (let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {    
       switch(Math.floor(Math.random()*3)){
         case 0: console.log("...human...why you taking pictures of me?...");
         break;
         case 1: console.log("...the catnip made me do it...");
         break;
         case 2: console.log("...why does the red dot always get away...");
       }
    }
    else {
      console.log('Love me, pet me! HSSSSSS!');
    }
}

// Fizz Buzz
// 1) If a number is divisible by 3 log "Fizz" instead of the number.
// 2) If a number is divisible by 5 log "Buzz" instead of the number
// 3) If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".

for(let i = 1; i <= 100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
}

// Getting to Know You
// 1) Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".
// 2) Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
// 3) Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
// 4) Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
// 5) Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
// 6) Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy";
jimClark[1] = jimClark[1] + 1;
ryan[2] = "Gotham City";
reuben.splice(1,1,"Chicago");
jimHaff.splice(2,1,"New York City","San Francisco","Toronto");
jimHaff.splice(2,1);

// Yell at the Ninja Turtles
// 1) Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// 2) Use a for loop to call .toUpperCase() on each of them and print out the result.
// 3) Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for(let i = 0; i < turtles.length; i++){
   const name = turtles[i].split('');
   for(let j = 0; j < name.length; j++){
       if(j % 2 === 0) {
           name[j] = name[j].toUpperCase();
       }
       else {
           name[j] = name[j].toLowerCase();
       }
    }
    turtles[i] = name.join("");
}
console.log(turtles);

// Return of the Closets
// 1) Alien Attire
// 2) Dress 'em Up
// 3) Dirty Laundry
// 4) Inventory

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  kristynsShoe = kristynsCloset.shift();
  thomsCloset[2].unshift(kristynsShoe);
  thomsCloset[0].unshift(kristynsCloset[2]);

  kristynsOutfit = [kristynsCloset[2], kristynsCloset[3], kristynsCloset[4]];
  thomsOutfit1 = [thomsCloset[0][0], thomsCloset[1][1], thomsCloset[2][2]];
  thomsOutfit2 = [thomsCloset[0][2], thomsCloset[1][0], thomsCloset[2][1]];
  console.log(`Kristyn's outfit is a ${kristynsOutfit[0]}, ${kristynsOutfit[1]} and a ${kristynsOutfit[2]}`);
  console.log(`Thom's first outfit is a ${thomsOutfit1[0]}, ${thomsOutfit1[1]}, and a ${thomsOutfit1[2]}`);
  console.log(`Thom's second outfit is a ${thomsOutfit2[0]}, ${thomsOutfit2[1]}, and ${thomsOutfit2[2]}`);

  for(let i = 0; i < kristynsCloset.length; i++) {
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`)
}

console.log(thomsCloset[0],thomsCloset[1],thomsCloset[2]);

// Multiples of 3 and 5
let sum = 0;
for(let i = 3; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
        sum += i;
    }
}
console.log(sum);