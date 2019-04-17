// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) { //recursion
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//
//     return fib(n - 1) + fib(n - 2)
// }

function fib(n) { //loop
    result=[];
    for (let j = 1; j <= n; j++) {
       if(j===1||j===2){
           result.push(1);
       }
       else{

           result.push((result[result.length-1]+result[result.length-2]));
       }
    }
    return result[result.length-1];
}

module.exports = fib;
