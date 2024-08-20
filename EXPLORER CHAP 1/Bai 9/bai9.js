//toán tử điều kiện (nếu đúng lấy trái - nếu sai lấy phải , ngăn cách nhau bởi ?)

const x = 10;
const y = '';
if(x>5){
    console.log(`greater than 5 >5`);
    
}else {
    console.log(`less than 5 >5`);

}

x > 5 ? console.log(`greater than 5 >5`) : console.log(`less than 5 >5`)

y = x > 5 ? "greater than 5" : "less than 5"