// let car = {
//     make: 'toyota',
//     year: 2000,
// }
// console.log(typeof car.year);
import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: 'a',
    type: 'number',
    message: 'Hello'
});
console.log(typeof answer.a);
