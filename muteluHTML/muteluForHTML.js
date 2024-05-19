
let zodiacSign = document.getElementById('zodiacSign');

function yourZodiac(zodiacSign){
  if (zodiacSign == "") {
    return "Please enter your zodiac sign";
  }
  switch (zodiacSign) {
    case "มังกร":
      luckyColors = "แดง"
      unLuckyColors = "-"
      break;
    case "กุมภ์":
      luckyColors = "ทอง, ส้ม"
      unLuckyColors = "-"
      break;
    case "มีน":
      luckyColors = "ขาว, เหลืองอ่อน, ครีม"
      unLuckyColors = "ดำ"
      break;
    case "เมษ":
      luckyColors = "ฟ้า, น้ำเงิน"
      unLuckyColors = "ขาว"
      break;
    case "พฤษภ":
      luckyColors = "เขียว, น้ำเงิน"
      unLuckyColors = "แดง"
      break;
    case "เมถุน":
      luckyColors = "ฟ้า, น้ำเงิน"
      unLuckyColors = "ชมพู"
      break;
    case "กรกฎ":
      luckyColors = "ส้ม"
      unLuckyColors = "เหลือง, ม่วง, ดำ"
      break;
    case "สิงห์":
      luckyColors = "ดำ, น้ำตาล, เทา"
      unLuckyColors = "ฟ้า"
      break;
    case "กันย์":
      luckyColors = "ฟ้า, น้ำเงิน, ขาว"
      unLuckyColors = "สีฉูดฉาด"
      break;
    case "ตุลย์":
      luckyColors = "ชมพู, ฟ้า"
      unLuckyColors = "ม่วง"
      break;
    case "พิจิก":
      luckyColors = "ทอง, เงิน, ส้ม"
      unLuckyColors = "ม่วง"
      break;
    case "ธนู":
      luckyColors = "ขาว, ครีม, เหลืองอ่อน"
      unLuckyColors = "แดง"
      break;
    default:
      luckyColors = "You do something wrong "
      unLuckyColors = "You do something wrong "
}
 
   return "ราศีของคุณคือ " + zodiacSign + "<br>" +
    "สีกระเป๋าตังค์เรียกทรัพย์ได้แก่ " + luckyColors + "<br>" +
    "สีที่ไม่ควรใช้ " + unLuckyColors

  // return `ราศีของคุณคือ:  ราศี${zodiacSign} <br>
  // สีกระเป๋าตังค์เรียกทรัพย์ได้แก่: ${luckyColors} <br>
  // สีที่ไม่ควรใช้:  ${unLuckyColors}`
  }