let numerator = 24;
let denominator = 54;
let n = numerator
let d = denominator
while(d != 0){
    let ostatok = n % d;
    n = d;
    d = ostatok;
}
numerator = numerator / n;
denominator = denominator / n;
alert(numerator + "/" + denominator);