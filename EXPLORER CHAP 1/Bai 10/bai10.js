//Optional chaining: toan tu ? 

let user = {};
console.log(user.address);
// console.log(user.address.street);
console.log(user.address ? user.address.street : 'undifined');
console.log(user?.address?.street ?? 'not found user');
//Errol!
//user.address //undifined

let userAdmin = {
    admin() {
        alert("I am Eric");
    }
};
let userGuest = {};
userAdmin.admin();
userGuest?.admin?.(); //check th ben trai ?.

let key = 'firstName';

let user1 = {
    firstName: "Hoi Dan IT"
}

let user2 = null;

alert(user1?.[key]);
alert(user2?.[key]);

//thao tác với object
//obj?. a?.b?.c //undefined

//obj ?.a ?.b?.c ?? 'not found'

//thao tác function
//obj.func?.()

let obj = {
    name: 'eric',
    channel: 'hoidanit',
    address: {
        street: 'abc',
        province: 'hang bai'
    }
}
console.log(obj.address);
