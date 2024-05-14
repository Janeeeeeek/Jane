let grade;
function calculateGrade(score){
    switch (true) {
    case score >= 80:
        grade = "A"    
        break;
    case score >= 71:
        grade = "B"   
        break;  
    case score >= 61:
        grade = "C"    
        break;
    case score >= 51:
        grade = "D" 
        break;
    default:
        grade = "F"
}
console.log("คะแนน " + score + " คุณได้เกรด " + grade)
}
calculateGrade(81)