// const person = { name: "Eric", age: 26, eyeColor: "red"}
// const name = person.name;
// const age = person.age;
// console.log(name);
// console.log(age);

const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl"};
const {age,name} = person;
//const age, const name
console.log(name);
console.log(age);


//old way
//const ha noi = city [0];
//const danang = city [1];
//const hcm = city [2];
//with destructuring
const city = ['ha noi', 'da nang', 'sai gon', 'ca mau'];
const [hanoi, danang, hcm] = city;
console.log(hanoi, danang, hcm);


const react = ['facebook','all-in-one','javascript'];
const [, ,javascript] = react;
let tech = javascript;
console.log(tech);

const dev = {salary:2000,tool:"laptop",like:"bugs"}
const {like:eric}= dev;
console.log(eric);
