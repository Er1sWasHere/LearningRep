let word = "an actual sentence What did you expect";
let turnedWord = "";
let splitsen = word.split(" ");
for(let i = splitsen.length - 1; i >= 0; i--) {
    if (splitsen[i].length > 5) {
        turnedWord += splitsen[i].split("").reverse().join("") + " ";
        splitsen[i] = turnedWord;
        turnedWord = "";
    } else {
        continue
    }
}
endedSen = splitsen.join(" ");
console.log(endedSen);