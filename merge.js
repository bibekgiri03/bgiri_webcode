const p = {
    name: 'ADam',
    age:40
}

const student = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);