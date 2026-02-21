class anotherFraction{
    constructor(ch, zn) {
        this.ch = ch;
        this.zn = zn;
    }
}
class fraction {
    constructor(ch, zn) {
        this.ch = ch;
        this.zn = zn;
    }
    BANЪ(){
    if( this.zn == 0){
        console.log("BANЪ, знаменатель не может быть равен 0");
        this.zn = 1;
    }
    }
    Print(){
        console.log(this.ch + "/" + this.zn);
    }
    Multiply(anotherFraction){
            let newCh = this.ch * anotherFraction.ch;
            let newZn = this.zn * anotherFraction.zn;
            let result = new fraction(newCh, newZn);
            console.log("Произведение: " + newCh + "/" + newZn);
            return result;
    }
    Division(anotherFraction){
            let newCh = this.ch * anotherFraction.zn;
            let newZn = this.zn * anotherFraction.ch;
            let result = new fraction(newCh, newZn);
            console.log("Частное: " + newCh + "/" + newZn);
            return result;
    }
}
myFraction = new fraction(4, 0);
myFraction.BANЪ();
myFraction.Print();
myFraction.Multiply(new fraction(2, 3));
myFraction.Division(new fraction(2, 3));