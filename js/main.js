
/**
 * The fibonacciSequence function generates and prints the Fibonacci sequence up to a given number.
 * @param n - The parameter `n` represents the number up to which you want to generate the Fibonacci
 * sequence.
 * @returns The function does not return any value. It only logs the Fibonacci sequence to the console.
 */
function fibonacciSequence(n) {
    if (n <= 0) {
        console.log("The number should be positive.");
        return;
    }

    let previous = 0;
    let next = 1;
    let result = 0;

    let sequence = "The Fibonacci sequence is: " + previous + ", " + next + ", ";

    while (result < n) {
        result = previous + next;
        previous = next;
        next = result;

        if (result <= n) {
            sequence += result + ", ";
        }
    }

    console.log(sequence.slice(0, -2)); // Print the sequence without the trailing comma and space
}

const n = parseInt(prompt("Enter a number: "));
fibonacciSequence(n);