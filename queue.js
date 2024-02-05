function Queue(customerQueue, couter){
    console.log("คิวที่ " + customerQueue + " เชิญที่ช่องบริการหมายเลข " + couter + " ค่ะ")
}

Queue(230, 3)

// ลูกค้า 1-4 คน กด คิว A
// ลูกค้า 5 คนขึ้นไป กดคิว B

function typeQueue(quantity, type){
 //   console.log("ลูกค้าจำนวน " + quantity + " คน กดคิว " + type)
return "ลูกค้า " + quantity + " คน กด " + type 
}
let queue = typeQueue("1-4", "A")
console.log(queue)
queue = typeQueue("มากกว่า 4", "B")
console.log(queue)

//typeQueue(1, "A")
//typeQueue(2, "A")
//typeQueue(3, "A")
//typeQueue(4, "A")
//typeQueue("มากกว่า 5", "B")