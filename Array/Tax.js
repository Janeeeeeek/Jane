//อยากรุ้ราคาหลัง tax ของสินค้า ชื่อฟังกืชั่นคือ includeTax
// - เก็บ สินค้า คือ product เป็น array >> string
// - เก็บ ราคาสินค้าก่อนTax คือ excludeTax เป็น array 300 150 100 >> number
// - สร้าง function ใช้คำนวนราคาสินค้าที่รวมTaxแล้ว ชื่อ sumTax , parameter คือ value ให้คำนวน ราคาสินค้า * 7% +ราคาสินค้า
// - includeTax ราคาสินค้าหลังtax .map function sumTax เพื่อคำนวนราคาสินค้าหลังTax จากค่า array excludeTax

const product = ["Cake", "Cookie", "Jelly"]
const excludeTax = [300, 150, 100]


function sumTax(value){
    return value * 0.07 + value;
}

const includeTax = excludeTax.map(sumTax)

console.log(product[0] + " ก่อนTaxราคา " + excludeTax[0] + " บาท");
console.log(product[1] + " ก่อนTaxราคา " + excludeTax[1] + " บาท");
console.log(product[2] + " ก่อนTaxราคา " + excludeTax[2] + " บาท");

console.log("******* ติดป้ายราคาที่ชั้นวางสินค้า *******")

console.log(product[0] + " ราคา " + includeTax[0] + " บาท" );
console.log(product[1] + " ราคา " + includeTax[1] + " บาท" );
console.log(product[2] + " ราคา " + includeTax[2] + " บาท" );