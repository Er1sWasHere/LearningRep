let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numToFind = 7;
let guessnum = null;

while (guessnum != numToFind) {
    guessnum = array[Math.floor(Math.random() * array.length)];
    console.log(`Guessing: ${guessnum}`);
    if (guessnum != numToFind) {
        array = array.filter(i => i !== guessnum);
    }
}

console.log("Number was found");
