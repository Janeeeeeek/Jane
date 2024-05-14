let shopName = "Code Class Coffee";
function welcomeCustomer(customerName){
    if(customerName==""){
        return "Welcome to " + shopName + " รับอะไรดีคะ"
    }      
    return "Welcome K." + customerName + " to " + shopName + " รับอะไรดีคะ"
}

function noticeOrderReady(forHereOrTakeAway, orderMenu){
    if(forHereOrTakeAway == "for here"){
        return orderMenu + " ทานที่ร้านได้แล้วค่ะ เชิญรับที่เค้าท์เตอร์ 1 ค่ะ"
    }
    if(forHereOrTakeAway == "take away"){
        return orderMenu + " Take away ได้แล้วค่ะ เชิญรับที่เค้าท์เตอร์ 2 ค่ะ"
    }
    return orderMenu + " ทานที่นี่หรือรับกลับบ้านค้าาาา ??"
}

module.exports = { welcomeCustomer,noticeOrderReady }
