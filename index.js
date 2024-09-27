#!/usr/bin/env node

const args = process.argv.slice(2);

let operators = false;
let Num1 = false;
let Num2 = false;

function displayHelp() {
    console.log(`
    Default Bin Words: math-operations
    
    Menu:
        -help,          Displays the help message
        -add,           Adds the numbers together (Default 2 numbers)
        -subtract       Subtracts one number from the other
        -multiply       Multiplies one number with the other
        -divide         Divides one number into the other

        Example: math-operations -add 9.7 2.8
        `);
    process.exit(0);
}

