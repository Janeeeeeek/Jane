function gpa(subject, score){
    
    switch(true){
        case score >= 80:
            gradeScore = 4
            grade = "A"
            break;
        case score >=75:
            gradeScore = 3.5
            grade = "B+"
            break;
        case score >=70:
            gradeScore = 3
            grade = "B"
            break;
        case score >=65:
            gradeScore = 2.5
            grade = "C+"
            break;
        case score >=60:
            gradeScore = 2
            grade = "C"
            break;
        case score >=55:
            gradeScore = 1.5
            grade = "D+"
            break;
        case score >=50:
            gradeScore = 1
            grade = "D"
        default:
            gradeScore = 0
            grade = "F"
    }
    switch(subject){
        case subject = "Math":
            credit = 3
            break;
        case subject = "English":
            credit = 2
            break;
        case subject = "Biology":
            credit = 4
            break;
        case subject = "physics":
            credit = 3
            break;
        case subject = "Chemistry":
            credit = 3
            break
        default:
            credit = 1
    }




console.log("วิชา "+subject +" ได้คะแนน " + score + " คะแนน ได้เกรด " + grade + " หรือเท่ากับเกรด " + gradeScore)
}

gpa("physics",61)