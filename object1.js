//object
const person1 = {
    firstName: "Supriya",
    lastName: "Kanchanasutha",
    age: 28,
    
    fullName: function() {
        return this.firstName + " " + this.lastName;

    },
    ageText: function() {
        return this.displayText = this.age + " Years old";
        console.log(displayText);

        // ageText: function() {
        //     const displayText = this.age + " Years old";
        //     return displayText;


    }
}
console.log(person1.fullName());
console.log(person1.ageText());

const supriyaFullname = person1.fullName();
console.log(supriyaFullname)
const supriyaAge = person1.ageText();
console.log(supriyaAge)
