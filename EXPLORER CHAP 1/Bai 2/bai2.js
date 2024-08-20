// class Person {
//     constructor(name,address){
//         this.name = name;
//         this.address = address
//     }

//     getAddress() {
//         return 'I live in ' + this.address;
//     }
// }

// const test = new Person("Hoi dan It","Ha Noi");
// console.log(">> check test:", test);
// console.log(">> check address:", test.getAddress());

class Novel {
    constructor(title,author){
        this.title = title;
        this.author = author;
    }

    getAuthor() {
        return 'Name author is ' + this.author;
    }
}

const myNovel = new Novel("Toi thay hoa hang tren co xanh","Nguyen Ngoc Anh");
console.log(" Ten tac gia cua tac pham nay la : " , myNovel.getAuthor());
