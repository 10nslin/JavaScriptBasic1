// // Basic 1
// //Create a variable x as an empty array []. Log this array to your console.
// let x = [];
// //Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.
// x.push('coding', 'dojo', 'rocks');
// //Use .pop() to remove the final element of your array.
// x.pop(2);
// console.log(x);

// //Basic 2
// //Create a const called y, and store an empty array there. Log this to your console.
// const y = [];
// //Use .push() to add the number 88 to array y.
// y.push(88);
// console.log(y);

//Basic 3
//Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].
 let z = [9, 10, 6, 5, -1, 20, 13, 2];
// //Print every element to the console.
// for(i=0; i<z.length;i++){
//     console.log(z[i]);
// }
// Now print every element except the final number.
// //Print every element to the console.
// for(i=0; i<z.length-1;i++){
//     console.log(z[i]);
// }

//Basic 4 
// Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
//Print the length of all names to the console.
// for(i=0;i<names.length;i++){
//     console.log(names[i].length);
// }
//Now modify your code so only names with a length of 5 print.
// for(i=0;i<names.length;i++){
//     if(names[i].length % 5 === 0){
//         console.log(names[i]);
//     } else{
//         continue;
//     }
// }

// Basic 5
// Create a function yell that takes one parameter called string.
function yell(string){
    //Make yell return that string in all uppercase
    console.log(string.toUpperCase());
}
yell("michael");

//Google