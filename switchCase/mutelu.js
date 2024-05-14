// user เกิดราสีอะไร
// parameter ใช้ชื่อ zodiacSign
// argument data type เป็น string >> Capricorn, Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius
// ชื่อ function >> luckyColors คือสีเรียกทรัพย์ , unLuckyColors คือสีที่ไม่ควรใช้ >>>>> return data type เป็น string
// Logic zodiacSign === argument
// Output ถ้าไม่มี argument ให้ return เป็น please enter your zodiac sign (data type > string)
// output ถ้ามี argument ถูกต้อง return เป็น ราศีของคุณคือ + zodiacsign , สีกระเป๋าตังค์เรียกทรัพย์ได้แก่ + luckyColors , สีที่ไม่ควรใช้ + unLuckyColors
// output มี argument ที่ไม่ถูก default luckyColors และ unLuckycolors เป็น you do something wrong!


let zodiacSign = "Cancer";

switch (zodiacSign) {
  case "Capricorn":
    luckyColors = "Red"
    unLuckyColors = "None"
    break;
  case "Aquarius":
    luckyColors = "Gold, Orange"
    unLuckyColors = "None"
    break;
  case "Pisces":
    luckyColors = "White, Light Yellow, Cream"
    unLuckyColors = "Black"
    break;
  case "Aries":
    luckyColors = "Blue, Dark Blue"
    unLuckyColors = "White"
    break;
  case "Taurus":
    luckyColors = "Green, Dark Blue, Greenish Yellow"
    unLuckyColors = "Red"
    break;
  case "Gemini":
    luckyColors = "Blue, Dark Blue"
    unLuckyColors = "Pink"
    break;
  case "Cancer":
    luckyColors = "Orange"
    unLuckyColors = "Yellow, Violet, Black"
    break;
  case "Leo":
    luckyColors = "Black, Brown, Gray"
    unLuckyColors = "Blue"
    break;
  case "Virgo":
    luckyColors = "Blue, Dark Blue, White"
    unLuckyColors = "Flashy Colors"
    break;
  case "Libra":
    luckyColors = "Pink, Blue"
    unLuckyColors = "Violet"
    break;
  case "Scorpio":
    luckyColors = "Gold, Silver, Orange"
    unLuckyColors = "Violet"
    break;
  case "Sagittarius":
    luckyColors = "White, Cream, Light Yellow"
    unLuckyColors = "Red"
    break;
  default:
    luckyColors = "You do something wrong!"
    unLuckyColors = "You do something wrong!"


}
if (zodiacSign == "") {
  console.log("Please enter your zodiac sign");
} else {
  console.log("ราศีของคุณคือ " + zodiacSign)
  console.log("สีกระเป๋าตังค์เรียกทรัพย์ได้แก่ " + luckyColors)
  console.log("สีที่ไม่ควรใช้ " + unLuckyColors)
}


