/*Classroom Assignment: Strings in JS
Learning Objective:
Understand how to reverse a string and check for palindromes in JavaScript by manipulating strings and using conditional logic.
Expected Completion Time:
Best Case: 15 minutes
Average Case: 20 minutes
Assignment Details:
Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a palindrome, then test your function with various strings and print the results.
Assignment Requirements:
Write a function to reverse the string.
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string

Hints to Solve:
1. Split string into characters using `split("")`.
2. Iterate backward through characters to build reversed string.
3. Use strict equality to compare original and reversed strings for palindrome check.
Expected Outcome:
Upon completion, you should be able to: - Understand the string manipulations in JavaScript*/

function reversestring(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    return reversed;
}

console.log(reversestring("hello"));



