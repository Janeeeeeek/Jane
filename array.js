const employee = ["Jane", "Pluto", "Neptune", "Saturn", "Sun", "Venus"]
//มีพนักงานทั้งหมดกี่คน
console.log(employee.length);
console.log("พนักงานที่เข้ามาทำงานคนแรกคือ " + employee[0]);

//พนักงานที่เข้ามาลำดับที่ 3
const numberOfEmployee = employee.length;
const thirdOfEmployee = employee.length - 4;
const nameOfThirdNunmber = employee[thirdOfEmployee]

console.log("พนักงานที่เข้ามาลำดับที่ 3 คือ " + nameOfThirdNunmber)