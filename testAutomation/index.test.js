const greeting = require("./index.js");

test("say greeting with customer name", () => {
    const greetingMsg = greeting("")
    expect(greetingMsg).toBe("Hello คุณลูกค้า");
})
