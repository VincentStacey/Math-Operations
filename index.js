#!/usr/bin/env node

const args = process.argv.slice(2);

// Default values //
let operators = false;
let Num1 = false;
let Num2 = false;

// This is the help display message //
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

// Code for the arguments to setup the numbers and operators. //
let i = 0;
while(i < args.length) {
  const arg = args[i];
  switch (arg) {
      case "-help":
          displayHelp();
          break;
          case "-add":
          case "-subtract":
          case "-multiply":
          case "-divide":
              operators = arg;
              if (i + 2 >= args.length) {
              console.error("Error: You need two decimal numbers");
              process.exit(1);
              }
              Num1 = parseFloat(args[++i]);
              Num2 = parseFloat(args[++i]);
              if (isNaN(Num1) || isNaN(Num2)) {
              console.error("Error: Both must be valid numbers");
              process.exit(1);
              }
              break;
          default:
              console.error("Error: Invalid Option in the '${arg}'");
              displayHelp();
  }
  i++;
}

// Small Error message incase no operator is provided //
if (!operators) {
    console.error("Error: No operator provided");
    displayHelp();
}

// Actual Function to generate the calculation //
function generateMath(operators,Num1,Num2) {
  switch (operators) {
    case "-add":
      return Num1 + Num2;
    case "-subtract":
      return Num1 - Num2;
    case "-multiply":
      return Num1 * Num2;
    case "-divide":
      if (Num2 === 0) {
        console.error("Error: Division by zero is not allowed");
        process.exit(1);
      }
      return Num1 / Num2;
      default:
      console.error("Error: Invalid operator used");
      displayHelp();
  }
}

const answer = generateMath(operators,Num1,Num2);
console.log(`The answer is : ${answer}`);