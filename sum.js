const x = parseInt(prompt('enter the range'));

let result = 0;


for (let i = 1; i <=x; i++) {
    result+= i;
}

console.log('The sum of natural numbers:', result);