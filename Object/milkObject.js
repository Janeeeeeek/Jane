//ทดลองสร้าง object ที่เก็บรายละเอียดสินค้าประเภทท นม ในร้านค้า
// เก็บนมแต่ละชนิดเป็น object
// รายละเอียดที่จะเก็บ property เป็น ยี่ห้อ >> brand, รสชาติ >> flavor, ปริมาณ >> Amount , ประเภทของนม >> milkType, ราคา >> priceProduct

const milk01 = {
    brand: "Mije",
    flavor: "vanilla",
    amount: 250,
    milkType: "พาสเจอร์ไรส์",
    priceProduct: 40,
// ตั้ง function vanillaMilk เมื่อเรียกใช้ให้ return ค่าให้เป็นไปตามที่ต้องการ โดยเรียกข้อมูลที่เราทำการเก็บ object milk01
vanillaMilk: function() {
    return "นม" + this.milkType + " ตรา " + this.brand + " รส " + this.flavor + " ปริมาณ " + this.amount + " ml ราคา " + this.priceProduct + " บาท";
}
}
//เรียกใช้ function ที่สร้าง (vanillaMiilk) โดยใช้ property จาก object milk01
console.log(milk01.vanillaMilk());
console.log("**************************************");

const milk02 ={
    brand: "Milk-Dutch",
    flavor: "strawberry",
    amount: 180,
    milkType: "เปรี่้ยว",
    priceProduct: 15,
// ตั้ง function strawberryMilk เก็บค่าแสดงผลเป็น strawberryMilkText กำหนดให้เมื่อเรียกใช้ function ให้ return ค่า strawberryMilkText
strawberryMilk: function(){
    const strawberryMilkText = "นม" + this.milkType + " ตรา " + this.brand + " รส " + this.flavor + " ปริมาณ " + this.amount + " ml ราคา " + this.priceProduct + " บาท";
    return strawberryMilkText;
}   
}
//เรียกใช้ function ที่สร้าง (strawberryMilk) โดยใช้ property จาก object milk02
console.log(milk02.strawberryMilk());
console.log("**************************************");


const milk03 ={
    brand: "Denmark-Thai",
    flavor: "chocolate",
    amount: 200,
    milkType: "ยูเอชที",
    priceProduct: 25,

chocolateMilk: function(){
    return this.chocolateMilkText = "นม" + this.milkType + " ตรา " + this.brand + " รส " + this.flavor + " ปริมาณ " + this.amount + " ml ราคา " + this.priceProduct + " บาท";
}
}
console.log(milk03.chocolateMilk());    
console.log("**************************************");


//การบ้านเก็บประวัติส่วนตัวสมาชิกฟิตเนส
// เก็ยสมาชิกแต่ละคนเป็น object
// รายละเอียดที่เก็บ รหัสสมาชิก >> codeMember, ชื่อสมาชิก >> name, เพศ >> sex, อายุ >> age, วันที่หมดอายุ >> dateExpire
const member001 = {
    codeMember: "F001",
    name: "Jane",
    sex: "Female",
    age: 27,
    dateExpire: new Date(2024,1,2),

//สร้าง function ชื่อ expired เป็น if-eles รับ parameter จาก dateExpired ใน object
//ถ้า dateExpire ใน object น้อยกว่าวันที่ปัจจุบันแสดงว่าหมดอายุแล้ว return ค่าเป็น *** หมดอายุ ***
//ถ้ายังไม่หมดอายุ ให้return เป็นค่าว่าง

expired: function(){
        if (this.dateExpire <= new Date()){
            return "*** หมดอายุสมาชิก ***";
        } else {
        return "";   
        }
    },   
//ตั้ง function memberF001 เมื่อเรียกใช้ให้ return ค่าให้เป็นไปตามที่ต้องการ โดยเรียกข้อมูลที่เราทำการเก็บ object member001
memberF001: function(){
    return this.codeMember + " Name: " + this.name + ", sex: " + this.sex + ", age: " + this.age + ", Expire Date " + this.dateExpire;
}
}

//เรียกใช้ function ที่สร้าง (memberF001 และ expired) โดยใช้ property จาก object member001
console.log(member001.memberF001(),member001.expired());
console.log("**********---------------**********");

const member002 = {
    codeMember: "M001",
    name: "Pluto",
    sex: "Male",
    age: 1,
    dateExpire: new Date(2024,11,31),

expired: function(){
        if (this.dateExpire <= new Date()){
            return "*** บัตรสมาชิกหมดอายุ ***";
        } else {
        return "";   
        }
    },   
memberF001: function(){
    return this.codeMember + " Name: " + this.name + ", sex: " + this.sex + ", age: " + this.age + ", Expire Date " + this.dateExpire;
}
}
console.log(member002.memberF001(),member002.expired());



