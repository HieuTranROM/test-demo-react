//spread syntax - toán tử 3 dấu chấm 

const firstArr = [1,2,3];
const secondArr = [4,5,6];
const thirdArr = [...firstArr,...secondArr];
const fourArr = [...secondArr,...firstArr];

// let myArr = ["Eric", "HoiDanIT","React"]
// myArr.push(`new Item);
// myArr = [...myArr, 'new item']
// console.log(thirdArr, fourArr);
// myArr = ['new item', ...myArr]
// console.log(myArr);


const test = {name: 'eric', address: 'hoidanid'};
console.log({...test});

const myVehicle = {
    brand: `Ford`,
    model: `Mustrang`,
    color: `red`
}

const updateMyVehicle = {
    type: `car`,
    year: 2021,
    color: `yellow`
}

const update = { ...myVehicle, ...updateMyVehicle}
console.log(update)

const state = {
    name: 'eric',
    age: 26,
    address: 'hanoi'
}

const result = { ...state, age:30}
console.log(result);


const arrayOne = ['a','b','c'];
const arrayTwo = [1,2,3];
const arraysCombined = [...arrayOne,...arrayTwo];
console.log(arraysCombined);

function sum(x,y,z){
    return x + y + z;
}
const numbers = [1,2,3];
console.log(sum(...numbers))
