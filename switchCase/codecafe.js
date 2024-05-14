// user สั่งเมนูอะไร ร้อนหรือเย็น เอาแก้วมาเองมั้ย 
// อยากรู้ราคาหลังจากเพิ่ม-ลดราคาแล้ว ตั้ง function เป็น totalPrice
// ถ้าเป็นเมนูเย็น +5 บาท , ถ้านำแก้วมาเอง -5 บาท
// --parameter 
// 1. orderMenu >> เมนูที่ลูกค้าสั่ง datatype เป็น string
// argument ที่เป็นไปได้ของ orderMenu >> เอสเปรสโซ่, อเมริกาโน่, คาปูชิโน่, มออค่า, ลาเต้, คาราเมลมัคคิอาโต้, นมสด, มัทฉะ, โกโก้, ชาไทย, นมชมพู
// ราคา orderMenu > function ราคาเมนูคือ priceOrderMenu datatype เป็น number
// เอสเปรสโซ่ 55 , อเมริกาโน่ 50, คาปูชิโน่ 60, มอคค่า 60, ลาเต้ 60, คาราเมลมัคคิอาโต้ 65, นมสด 50, มัทฉะ 60, โกโก้ 60, ชาไทย 55, นมชมพู 55
// 2. typeDrink >> user สั่งเมนูประเภทร้อนหรือเย็น datatype เป็น string
// argument typeDrink >> ร้อน, เย็น
// ราคา typeDrink > function ราคาประเภทเครื่องดื่มคือ priceTypeDrink datatype เป็น number
// เย็น 5 ถ้าร้อน default เป็น 0
// 3. saveEarth >> user เอาแก้วมาเองมั้ย datatype เป็น string
// argument saveEarth >> นำแก้วมาเอง, ""
// ราคา saveEarth > function ราคานำแก้วมาเองมั้ยคือ priceSaveEarth datatype เป็น number
// นำแก้วมาเอง 5 ถ้าไม่เอาแก้วมา defaultเป็น 0
// logic orderMenu, typeDrink, saveEarth === argument
// output orderMenu + typeDrink + saveEarth + " ราคา " + ((priceOrderMenu + priceTypeDrink) - priceSaveEarth) + " บาท "

function totalPrice(orderMenu, typeDrink, saveEarth) {
    switch(orderMenu) {
        case "เอสเปรสโซ่":
            priceOrderMenu = 55
            break;
        case "อเมริกาโน่":
            priceOrderMenu = 50
            break;
        case "คาปูชิโน่":
            priceOrderMenu = 60
            break;
        case "มอคค่า":
            priceOrderMenu = 60
            break;
        case "ลาเต้":
            priceOrderMenu = 60
            break;
        case "คาราเมลมัคคิอาโต้":
            priceOrderMenu = 65
            break;
        case "นมสด":
            priceOrderMenu = 50
            break;
        case "มัทฉะ":
            priceOrderMenu = 60
            break;
        case "โกโก้":
            priceOrderMenu = 60
            break;
        case "ชาไทย":
            priceOrderMenu = 55
            break;
        case "นมชมพู":
            priceOrderMenu = 55
            break;
    }

    switch(typeDrink) {
        case "เย็น":
            priceTypeDrink = 5
            break;
        default:
            priceTypeDrink = 0
            break;
    }

    switch(saveEarth){
        case "นำแก้วมาเอง":
            priceSaveEarth = 5
            break;
        default:
            priceSaveEarth = 0
            break;
        }
        const orderMenuCustomer = orderMenu + typeDrink + saveEarth + " ราคา " + ((priceOrderMenu + priceTypeDrink) - priceSaveEarth) + " บาท"
        console.log(orderMenuCustomer)
    return orderMenuCustomer
    }

totalPrice("ชาไทย", "เย็น", "นำแก้วมาเอง")
totalPrice("เอสเปรสโซ่", "เย็น", "")
totalPrice("โกโก้", "ร้อน", "นำแก้วมาเอง")
totalPrice("คาราเมลมัคคิอาโต้", "เย็น", "")
totalPrice("มัทฉะ", "ร้อน", "")
totalPrice("มัทฉะ", "เย็น", "")
totalPrice("ลาเต้", "", "นำแก้วมาเอง")
totalPrice("ลาเต้", "เย็น", "")

module.exports = totalPrice;