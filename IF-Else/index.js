function greeting(customerName){
    if(customerName === ""){
        return "Hello คุณลูกค้า";
    }
    return "Hello " + customerName;
}
console.log(greeting());

module.exports = greeting;

