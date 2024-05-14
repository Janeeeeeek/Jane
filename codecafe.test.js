const totalPrice = require("./codecafe")
const testCases =[
    {
        orderMenu: "อเมริกาโน่",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "อเมริกาโน่เย็นนำแก้วมาเอง ราคา 50 บาท"
    },
    {
        orderMenu: "อเมริกาโน่",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "อเมริกาโน่ร้อนนำแก้วมาเอง ราคา 45 บาท"
    },
    {
        orderMenu: "อเมริกาโน่",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "อเมริกาโน่เย็น ราคา 55 บาท"
    },
    {
        orderMenu: "อเมริกาโน่",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "อเมริกาโน่ร้อน ราคา 50 บาท"
    },
    {
        orderMenu: "เอสเปรสโซ่",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "เอสเปรสโซ่เย็นนำแก้วมาเอง ราคา 55 บาท"
    },
    {
        orderMenu: "เอสเปรสโซ่",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "เอสเปรสโซ่ร้อนนำแก้วมาเอง ราคา 50 บาท"
    },
    {
        orderMenu: "เอสเปรสโซ่",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "เอสเปรสโซ่เย็น ราคา 60 บาท"
    },
    {
        orderMenu: "เอสเปรสโซ่",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "เอสเปรสโซ่ร้อน ราคา 55 บาท"
    },
    {
        orderMenu: "คาปูชิโน่",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "คาปูชิโน่เย็นนำแก้วมาเอง ราคา 60 บาท"
    },
    {
        orderMenu: "คาปูชิโน่",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "คาปูชิโน่ร้อนนำแก้วมาเอง ราคา 55 บาท"
    },
    {
        orderMenu: "คาปูชิโน่",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "คาปูชิโน่เย็น ราคา 65 บาท"
    },
    {
        orderMenu: "คาปูชิโน่",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "คาปูชิโน่ร้อน ราคา 60 บาท"
    },
    {
        orderMenu: "มอคค่า",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "มอคค่าเย็นนำแก้วมาเอง ราคา 60 บาท"
    },
    {
        orderMenu: "มอคค่า",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "มอคค่าร้อนนำแก้วมาเอง ราคา 55 บาท"
    },
    {
        orderMenu: "มอคค่า",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "มอคค่าเย็น ราคา 65 บาท"
    },
    {
        orderMenu: "มอคค่า",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "มอคค่าร้อน ราคา 60 บาท"
    },
    {    
        orderMenu: "ลาเต้",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "ลาเต้เย็นนำแก้วมาเอง ราคา 60 บาท"
    },
    {
        orderMenu: "ลาเต้",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "ลาเต้ร้อนนำแก้วมาเอง ราคา 55 บาท"
    },
    {
        orderMenu: "ลาเต้",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "ลาเต้เย็น ราคา 65 บาท"
    },
    {
        orderMenu: "ลาเต้",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "ลาเต้ร้อน ราคา 60 บาท"
    },
    {    
        orderMenu: "มัทฉะ",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "มัทฉะเย็นนำแก้วมาเอง ราคา 60 บาท"
    },
    {
        orderMenu: "มัทฉะ",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "มัทฉะร้อนนำแก้วมาเอง ราคา 55 บาท"
    },
    {
        orderMenu: "มัทฉะ",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "มัทฉะเย็น ราคา 65 บาท"
    },
    {
        orderMenu: "มัทฉะ",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "มัทฉะร้อน ราคา 60 บาท"
    },
    {    
        orderMenu: "โกโก้",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "โกโก้เย็นนำแก้วมาเอง ราคา 60 บาท"
    },
    {
        orderMenu: "โกโก้",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "โกโก้ร้อนนำแก้วมาเอง ราคา 55 บาท"
    },
    {
        orderMenu: "โกโก้",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "โกโก้เย็น ราคา 65 บาท"
    },
    {
        orderMenu: "โกโก้",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "โกโก้ร้อน ราคา 60 บาท"
    },
    {
        orderMenu: "นมสด",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "นมสดเย็นนำแก้วมาเอง ราคา 50 บาท"
    },
    {
        orderMenu: "นมสด",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "นมสดร้อนนำแก้วมาเอง ราคา 45 บาท"
    },
    {
        orderMenu: "นมสด",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "นมสดเย็น ราคา 55 บาท"
    },
    {
        orderMenu: "นมสด",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "นมสดร้อน ราคา 50 บาท"
    },
    {
        orderMenu: "ชาไทย",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "ชาไทยเย็นนำแก้วมาเอง ราคา 55 บาท"
    },
    {
        orderMenu: "ชาไทย",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "ชาไทยร้อนนำแก้วมาเอง ราคา 50 บาท"
    },
    {
        orderMenu: "ชาไทย",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "ชาไทยเย็น ราคา 60 บาท"
    },
    {
        orderMenu: "ชาไทย",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "ชาไทยร้อน ราคา 55 บาท"
    },
    {
        orderMenu: "นมชมพู",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "นมชมพูเย็นนำแก้วมาเอง ราคา 55 บาท"
    },
    {
        orderMenu: "นมชมพู",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "นมชมพูร้อนนำแก้วมาเอง ราคา 50 บาท"
    },
    {
        orderMenu: "นมชมพู",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "นมชมพูเย็น ราคา 60 บาท"
    },
    {
        orderMenu: "นมชมพู",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "นมชมพูร้อน ราคา 55 บาท"
    },
    {
        orderMenu: "คาราเมลมัคคิอาโต้",
        typeDrink: "เย็น",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "คาราเมลมัคคิอาโต้เย็นนำแก้วมาเอง ราคา 65 บาท"
    },
    {
        orderMenu: "คาราเมลมัคคิอาโต้",
        typeDrink: "ร้อน",
        saveEarth: "นำแก้วมาเอง",
        responseExpect: "คาราเมลมัคคิอาโต้ร้อนนำแก้วมาเอง ราคา 60 บาท"
    },
    {
        orderMenu: "คาราเมลมัคคิอาโต้",
        typeDrink: "เย็น",
        saveEarth: "",
        responseExpect: "คาราเมลมัคคิอาโต้เย็น ราคา 70 บาท"
    },
    {
        orderMenu: "คาราเมลมัคคิอาโต้",
        typeDrink: "ร้อน",
        saveEarth: "",
        responseExpect: "คาราเมลมัคคิอาโต้ร้อน ราคา 65 บาท"
    },   
]


for(const testCase of testCases) {
    test (`test001 orderMenu: ${testCase.orderMenu} ${testCase.typeDrink} ${testCase.saveEarth}`, () => {
        const responseTotalPrice = totalPrice(testCase.orderMenu, testCase.typeDrink, testCase.saveEarth)
        expect(responseTotalPrice).toBe(testCase.responseExpect)
    })
}

// const testCase001 ={
//     orderMenu: "ชาไทย",
//     typeDrink: "เย็น",
//     saveEarth: "นำแก้วมาเอง"
//     }
// test (`test001 orderMenu: ${testCase001.orderMenu} ${testCase001.typeDrink} ${testCase001.saveEarth}`, () => {
//     const responseTotalPrice = totalPrice(testCase001.orderMenu, testCase001.typeDrink, testCase001.saveEarth)
//     expect(responseTotalPrice).toBe("ชาไทยเย็นนำแก้วมาเอง ราคา 55 บาท")
// })

// const testCase002 ={
//     orderMenu: "เอสเปรสโซ่",
//     typeDrink: "เย็น",
//     saveEarth: ""
//     }

// test (`test001 orderMenu: ${testCase002.orderMenu} ${testCase002.typeDrink} ${testCase002.saveEarth}`, () => {
//     const responseTotalPrice = totalPrice(testCase002.orderMenu, testCase002.typeDrink, testCase002.saveEarth)
//     expect(responseTotalPrice).toBe("เอสเปรสโซ่เย็น ราคา 60 บาท")
// })

// const testCase003 ={
//     orderMenu: "โกโก้",
//     typeDrink: "ร้อน",
//     saveEarth: "นำแก้วมาเอง"
//     }

// test (`test001 orderMenu: ${testCase003.orderMenu} ${testCase003.typeDrink} ${testCase003.saveEarth}`, () => {
//     const responseTotalPrice = totalPrice(testCase003.orderMenu, testCase003.typeDrink, testCase003.saveEarth)
//     expect(responseTotalPrice).toBe("โกโก้ร้อนนำแก้วมาเอง ราคา 55 บาท")
// })

// const testCase004 ={
//     orderMenu: "คาราเมลมัคคิอาโต้",
//     typeDrink: "เย็น",
//     saveEarth: ""
//     }

// test (`test001 orderMenu: ${testCase004.orderMenu} ${testCase004.typeDrink} ${testCase004.saveEarth}`, () => {
//     const responseTotalPrice = totalPrice(testCase004.orderMenu, testCase004.typeDrink, testCase004.saveEarth)
//     expect(responseTotalPrice).toBe("คาราเมลมัคคิอาโต้เย็น ราคา 70 บาท")
// })

// const testCase005 ={
//     orderMenu: "มัทฉะ",
//     typeDrink: "ร้อน",
//     saveEarth: ""
//     }

// test (`test001 orderMenu: ${testCase005.orderMenu} ${testCase005.typeDrink} ${testCase005.saveEarth}`, () => {
//     const responseTotalPrice = totalPrice(testCase005.orderMenu, testCase005.typeDrink, testCase005.saveEarth)
//     expect(responseTotalPrice).toBe("มัทฉะร้อน ราคา 60 บาท")
// })

// const testCase006 ={
//     orderMenu: "มัทฉะ",
//     typeDrink: "เย็น",
//     saveEarth: ""
//     }

// test (`test001 orderMenu: ${testCase006.orderMenu} ${testCase006.typeDrink} ${testCase006.saveEarth}`, () => {
//     const responseTotalPrice = totalPrice(testCase006.orderMenu, testCase006.typeDrink, testCase006.saveEarth)
//     expect(responseTotalPrice).toBe("มัทฉะเย็น ราคา 65 บาท")
// })

// const testCase007 ={
//     orderMenu: "ลาเต้",
//     typeDrink: "",
//     saveEarth: "นำแก้วมาเอง"
//     }

// test (`test001 orderMenu: ${testCase007.orderMenu} ${testCase007.typeDrink} ${testCase007.saveEarth}`, () => {
//     const responseTotalPrice = totalPrice(testCase007.orderMenu, testCase007.typeDrink, testCase007.saveEarth)
//     expect(responseTotalPrice).toBe("ลาเต้นำแก้วมาเอง ราคา 55 บาท")
// })

// const testCase008 ={
//     orderMenu: "ลาเต้",
//     typeDrink: "เย็น",
//     saveEarth: ""
//     }

// test (`test001 orderMenu: ${testCase008.orderMenu} ${testCase008.typeDrink} ${testCase008.saveEarth}`, () => {
//     const responseTotalPrice = totalPrice(testCase008.orderMenu, testCase008.typeDrink, testCase008.saveEarth)
//     expect(responseTotalPrice).toBe("ลาเต้เย็น ราคา 65 บาท")
// })



// totalPrice("ชาไทย", "เย็น", "นำแก้วมาเอง")
// totalPrice("เอสเปรสโซ่", "เย็น", "")
// totalPrice("โกโก้", "ร้อน", "นำแก้วมาเอง")
// totalPrice("คาราเมลมัคคิอาโต้", "เย็น", "")
// totalPrice("มัทฉะ", "ร้อน", "")
// totalPrice("มัทฉะ", "เย็น", "")
// totalPrice("ลาเต้", "", "นำแก้วมาเอง")
// totalPrice("ลาเต้", "เย็น", "")