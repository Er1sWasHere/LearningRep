let string = "hi";
function txtCheck(str) {
    let txt = str.split('');
    for (let i = 0; i < txt.length; i++) {
    let ascii = txt[i].charCodeAt(0);
    let astobin = ascii.toString(2);
    let asToBinThrice = astobin.repeat(3);
        if (astobin.length != asToBinThrice.length / 3) {
        console.log("Error.");
    }
    else{
    console.log(asToBinThrice);        
    }

}
}
txtCheck(string)