//Here is the program to solve
let r1,r2;

let abc = prompt("Enter the first number: ");
let xyz = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

//taking res
let res = xyz* xyz - 4 * abc * c;

if (res > 0) {
    r1 = (-xyz + Math.sqrt(res)) / (2 * abc);
    r2 = (-xyz - Math.sqrt(res)) / (2 * abc);
//some results
    
    console.log(`The roots of quadratic equation are ${r1} and ${r2}`);
}
else if (res == 0) {
    r1 = r2 = -xyz / (2 * abc);

    // Here is the output results
    console.log(`The roots of quadratic equation are ${r1} and ${r2}`);