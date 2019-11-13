import {  ketqua11}  from "./test.js";
console.log(ketqua11);
var a = 1 ;
let b = 2 ;
// let cat nhat bien bi loi 
// let b = 3 ;

const c = 3;
function fol (){
    var x = 10 ;
    if (true ){
        var x = 20;
        console.log(x);
    }
    console.log(x);

}
function fol2() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}
fol();

fol2();
// for(let i = 0 ; i < 4 ; i ++){
//     console.log(i);
// };
// console.log(i);

// cơ chết hoisting
console.log(number);
var number = 10 ;
//function 
function test(){

}
function test2(){
    return 10;
};
// chuyen qua arrow fuction 
let test1 = (name,number) => {
    console.log("hello"+ name);
};
// tra ve khong can return 
let test3 =() => 10;
test1("phuc",212312312);
console.log(test3());
// es5 
let hocvien ={
    // key : value 
    hoTen : "Nguyen Van A",
    lop : "FE32",
    // phuong thuc trong doi 
    layThongTinNhanVien: function(){
        console.log(this);
        // ham trong phuong thuc
        function hienThiThongTin (){
            console.log(this);
            let bind = this;
            console.log(`Ho ten : ${bind.hoTen} - lop ${bind.lop}`)
        }
        hienThiThongTin();
    }
}
hocvien.layThongTinNhanVien();

// es 6 let trong khoi tao doi tuong

let hocVien2 = {
    hoTen : " Nguyen Van B",
    lop :"FE32",
    layThongTinNhanVien : function (){
        let hienThiThongTin =()=>{
            console.log(`Ho Ten : ${this.hoTen} - Lop : ${this.lop}`);
        }
        hienThiThongTin();
    }
}
hocVien2.layThongTinNhanVien();
// rest params

// es5 

function sum(a,b,c,d,e,f,g){

}
//es6 truyen tham so n bien 
function sum1(...numbers){
    let tong = 0;
    numbers.map((item,index)=>{
        tong += item;
    });
    console.log(tong);
}
sum1(2,3,213,23,4,34,);
// ham reduc

function sum2(...number){
    return number.reduce((a,b)=>{
        return a + b;
    },0);
    
}
console.log(sum2(3213,2323,12312));

// Spread Operator note
//es 5 tham chieu lai mang B
let mangA =[ 1,2,3];
let mangB = mangA;
mangB.push(4);
mangB.push(5);
console.log(mangA);
console.log(mangB);
// spread opertaor es6 giai quyet van de tham chieu
let mangC =[1,2,3];
let mangD = [...mangC,4,5];
console.log(mangC);
console.log(mangD);
//es 5
let object ={
    name : "Nguyen",
    age : 18
};
let object1 = object;
object1.lop = "FE32";
console.log(object);

console.log(object1);

// es 6

let object2 ={
    name : "Nguyen",
    age : 18
};
let object3 = {...object2,lop :"FE32"};
console.log(object2);
console.log(object3);
// default params mac dinh tham so trong es6

let getInfo =(name = "Nguyen",age =18)=>{
    console.log(name,age);
}
getInfo();

// desstrurturing ( boc tach)
//es5
let mangE =[1,2];
mangE[0];
mangE[1];
let mangF = [1,2];
// es6 
let [a1,b1]= mangF;
console.log(a1,b1);
//es 5
let nguoi = {
    name:"phuc",
    age:18
};
// boc tac trong doi tuong dung key
let { name, age} = nguoi;
console.log(name,age);
// Template string
// es5 
let ten ="Phuc";
let kq = "Hello " + ten ; // chuoi truyen thong 
let kq2 = `Hello ${ten}`; // template 

// object literals ( doi tuong chan phuong);

let hoTen1 ="phuc";
let lopA ="FE 32";
let doiTuongNguoi ={
    hoTen1, // hoTen1 = hoTen1 
    lopA 
};
// cach 2
let proHoTen ="hoTen"; // "hoTen" la key trong doi tuong
let proLop = "lop";
let doiTuongNguoi1 ={
    [proHoTen]:"Nguyen",
    [proLop]: "FE 32"

};

// for in so chi muc

let listFriend = ["Nguyen ", "Phuc","Tuan"];
for (let list in listFriend ){
    console.log(list);
}

// for of lay gia tri mang

for (let list of listFriend){
    console.log(list);
}