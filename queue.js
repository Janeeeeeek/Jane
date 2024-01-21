function queue(customerQueue, couter) {
    console.log("คิวที่ " + customerQueue + " เชิญที่ช่องบริการหมายเลข " + couter + " ค่ะ")
} 

queue(230, 3)

// ลูกค้า 1-4 คน กด A
// ลูกค้า 5 คนขึ้นไป กด B

function count(person, type) {
    console.log("ลูกค้าจำนวน " + person + " คน" + " กด " + type)
}   

count(1, "A")
count(2, "A")
count(3, "A")
count(4, "A")
count("มากกว่า 5", "B")






