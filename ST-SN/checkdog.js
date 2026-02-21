class Dog{
    constructor(name, age, breed, vaccinated, wormed){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.vaccinated = vaccinated;
        this.wormed = wormed;
    }
    checkDog(){
        if(this.vaccinated && this.wormed){
            return `${this.name} can be accepted.`;
        }
        else if(!this.vaccinated && !this.wormed){
            return `${this.name} can't be accepted.`;
        }
        else if(!this.vaccinated || !this.wormed){
            return `${this.name} can be accepted by itself`;
        }
        else{
            return `???`;
        }
    }
}
var spot = new Dog("Spot", 5, "Labrador", true, false);
alert(spot.checkDog());