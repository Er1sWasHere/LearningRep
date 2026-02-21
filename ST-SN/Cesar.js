let txt = "fcjjm"
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let num = 2
for(let i = 0; i < num; i++){
    let newTxt = ""
    for(let b = 0; b < txt.length; b++){
        let index = alphabet.indexOf(txt[b])
        let newIndex = (index + 1) % alphabet.length
        newTxt += alphabet[newIndex]
    }
    txt = newTxt
}
console.log(txt)