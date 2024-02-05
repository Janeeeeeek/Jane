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
    luckyColors = ""
    unLuckyColors = ""


}
if (zodiacSign == "") {
  console.log("Please enter your zodiac sign");
} else {
  console.log("ราศีของคุณคือ " + zodiacSign)
  console.log("สีกระเป๋าตังค์เรียกทรัพย์ได้แก่ " + luckyColors)
  console.log("สีที่ไม่ควรใช้ " + unLuckyColors)
}


