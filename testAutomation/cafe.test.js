const { welcomeCustomer, noticeOrderReady } = require("./cafe.js")

test("welcomeCustomerName", () => {
    const welcomeCustomerToCafe = welcomeCustomer("Jane");
    expect(welcomeCustomerToCafe).toBe("Welcome K.Jane to Code Class Coffee รับอะไรดีคะ");
})

test("welcomeCustomerNull", () => {
    const welcomeCustomerToCafe = welcomeCustomer("");
    expect(welcomeCustomerToCafe).toBe("Welcome to Code Class Coffee รับอะไรดีคะ");
})

test("noticeOrderReadyForHere", () => {
    const noticeOrderReadyToDrink = noticeOrderReady("for here", "Americano");
    expect(noticeOrderReadyToDrink).toBe("Americano ทานที่ร้านได้แล้วค่ะ เชิญรับที่เค้าท์เตอร์ 1 ค่ะ");
})

test("noticeOrderReadyTakeAway", () => {
    const noticeOrderReadyToDrink = noticeOrderReady("take away", "Apple Soda");
    expect(noticeOrderReadyToDrink).toBe("Apple Soda Take away ได้แล้วค่ะ เชิญรับที่เค้าท์เตอร์ 2 ค่ะ");
})

test("noticeOrderReadyNull", () => {
    const noticeOrderReadyToDrink = noticeOrderReady("", "Latte");
    expect(noticeOrderReadyToDrink).toBe("Latte ทานที่นี่หรือรับกลับบ้านค้าาาา ??");
})
