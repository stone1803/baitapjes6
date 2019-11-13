//es 5
function hocSinh (name){

}
// es 6
class Student {
    // ham khoi tao doi tuong 
    constructor(name){
        this.name = name;

    }
}
// khoi tao doi tuon g
let student = new Student("Nguyen");

// doi tuong ke thua

class mother {
    constructor(name){
        this.name = name;
    }
    colorEyes(){
        console.log("RED");
    }
}
class Me extends mother {
    // ke thua co phuong thuc
    colorSkin(){
        console.log("Brow");
    }
}
let me = new Me("Phuc");
me.colorEyes();
me.colorSkin();

// over ghi de phuong thuc doi tuong

class Person {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
class Monkey extends Person{
    getName(){
        return "Hello" + this.name;
    }
}
let monkey = new Monkey(" khai");
console.log(monkey.getName());

class conNguoi {
    constructor(name,age){
        this.name = name;
        this.age = age ;
    }
    getThongTin(){
        console.log(`ten : ${this.name} - tuoi : ${this.age}`)
    }
}
class conKhi extends conNguoi {
    constructor(name,age,eat){
        // vi cha da thua huong 2 tham so ten va tuoi nen sai tu khoa super
        super(name,age);
        this.eat = eat;

    }
    getThongThi(){
        super.getThongTin();
        console.log(this.eat);
    }
}
let conkhi = new conKhi("Kec kec ",2,"Chuoi");
conkhi.getThongThi();






