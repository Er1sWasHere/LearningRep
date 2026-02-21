let string = "y343fde######rty###"
string = string.split("")
let finalString = ""

for(let i = 0; i < string.length; i++) {
    if(string[i] == "#") {
        if(i > 0) {
            string.splice(i - 1, 1)
            string.splice(i - 1, 1)
            i = -1
        } else {
            string.splice(i, 1)
            i = -1
        }
    }
}
finalString = string.join("")
console.log(finalString)