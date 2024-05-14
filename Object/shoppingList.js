const shoppingList = [
    {item: "Apple",
    quantity: 20}
,
{item: "Orange",
quantity: 18}
,
{item: "Giwi",
quantity: 18}
,
{item: "Milk",
quantity: 5}
,
{item: "Water",
quantity: 8}
];


function itemToBuy() {
    for (const itemToBuy of shoppingList){
        console.log(itemToBuy.item + " จำนวน " + itemToBuy.quantity + " ชิ้น");
}
}

console.log(itemToBuy())



const alreadyBuyItems = [
    {item: "Apple",
    quantity: 12}
,
{item: "Orange",
quantity: 12}
,
{item: "Giwi",
quantity: 12}
,
{item: "Milk",
quantity: 3}
,
{item: "Water",
quantity: 8}
];

function itemBuyAlready() {
    for (const itemBuyAlready of alreadyBuyItems){
        console.log(itemBuyAlready.item + " ซื้อไปแล้วจำนวน " + itemBuyAlready.quantity + " ชิ้น");
}
}
console.log(itemBuyAlready())




// function removeOfList(){
//     if(item.quantity !=0){
//         return items
//     }
//     return "ต้องซื้อ " + itemToBuy.item + " เพิ่มอีก " + itemToBuy.quantity-itemBuyAlready.quantity + " ชิ้น"
// }
// console.log(removeOfList())

//----------------------------------------------

// // function 

function itemList(shoppingItem,alreadyBuyItems){
    for(const alreadyBuyItem of alreadyBuyItems) {
        if(shoppingItem.item == alreadyBuyItem.item){
            return {item: shoppingItem.item , quantity:shoppingItem.quantity - alreadyBuyItem.quantity}
        }
            
        }
    }
function removeOfList(item){
        if (item.quantity != 0){
            return item
        } 
    }
const items = shoppingList.map(item => {
   return itemList(item,alreadyBuyItems)
})

// console.log(items.map(removeOfList).filter(function( element ) {
//     return element !== undefined;
//  }));


//----------------------------------------------------


// console.log( shoppingList.map(item => {
//     const findAlrItem = alreadyBuyItems.find(alItem => alItem.item === item.item)
//     return { ...item, quantity: item.quantity - findAlrItem.quantity }
//  }).filter(item => item.quantity !== 0))