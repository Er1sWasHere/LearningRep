let town = "~O~O~O~OP~O~OO~";

let rats = [];
for (let i = 0; i < town.length; i++) {
    if (town[i] === "P") {
        rats.push("P");
    }
     else {
        rats.push(town[i] + town[i + 1]); 
        i++;
    }
}

let dudochnik = rats.indexOf("P");
let deaf = 0;

for (let i = 0; i < rats.length; i++) {
    if (rats[i] === "P") continue;

    if (i < dudochnik) {
        if (rats[i] !== "~O") deaf++;
    } else {
        if (rats[i] !== "O~") deaf++;
    }
}

alert("Deaf rats: " + deaf + ".");