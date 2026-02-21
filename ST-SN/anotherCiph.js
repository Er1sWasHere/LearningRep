class RandomAlp {
    constructor() {
               //  A    D    X    F    G
        this.A = ['a', 'e', 'i', 'o', 'u'];
        this.D = ['t', 'n', 's', 'r', 'l'];
        this.X = ['b', 'f', 'c', 'p', 'm'];
        this.F = ['d', 'g', 'h', 'k', 'w'];
        this.G = ['q', 'v', 'x', 'y', 'z'];
    }
}

const randomAlp = new RandomAlp();

let word = "fade";
let key = "post";
let result = "";

function isInArray(arr, symbol,){
    if(arr.includes(symbol)){
        return arr.includes(symbol);
    }
}

for(let i = 0; i < word.length; i++) {
    if(isInArray(randomAlp.A, word[i])){
        result += "A"
        if(randomAlp.A[i] == randomAlp.A[0]){
            result += "A"
        }
        else if(randomAlp.A[i] == randomAlp.A[1]){
            result += "D"
        }
        else if(randomAlp.A[i] == randomAlp.A[2]){
            result += "X"
        }
        else if(randomAlp.A[i] == randomAlp.A[3]){
            result += "F"
        }
        else if(randomAlp.A[i] == randomAlp.A[4]){
            result += "G"
        }
    }
    else if(isInArray(randomAlp.D, word[i])){
        result += "D"
        if(randomAlp.D[i] == randomAlp.D[0]){
            result += "A"
        }
        else if(randomAlp.D[i] == randomAlp.D[1]){
            result += "D"
        }
        else if(randomAlp.D[i] == randomAlp.D[2]){
            result += "X"
        }
        else if(randomAlp.D[i] == randomAlp.D[3]){
            result += "F"
        }
        else if(randomAlp.D[i] == randomAlp.D[4]){
            result += "G"
        }
    } else if(isInArray(randomAlp.X, word[i])){
        result += "X"
                if(randomAlp.X[i] == randomAlp.X[0]){
            result += "A"
        }
        else if(randomAlp.X[i] == randomAlp.X[1]){
            result += "D"
        }
        else if(randomAlp.X[i] == randomAlp.X[2]){
            result += "X"
        }
        else if(randomAlp.X[i] == randomAlp.X[3]){
            result += "F"
        }
        else if(randomAlp.X[i] == randomAlp.X[4]){
            result += "G"
        }
    } else if(isInArray(randomAlp.F, word[i])){
        result += "F"
                if(randomAlp.F[i] == randomAlp.F[0]){
            result += "A"
        }
        else if(randomAlp.F[i] == randomAlp.F[1]){
            result += "D"
        }
        else if(randomAlp.F[i] == randomAlp.F[2]){
            result += "X"
        }
        else if(randomAlp.F[i] == randomAlp.F[3]){
            result += "F"
        }
        else if(randomAlp.F[i] == randomAlp.F[4]){
            result += "G"
        }
    }   else if(isInArray(randomAlp.G, word[i])){
        result += "G";
                if(randomAlp.G[i] == randomAlp.G[0]){
            result += "A"
        }
        else if(randomAlp.G[i] == randomAlp.G[1]){
            result += "D"
        }
        else if(randomAlp.G[i] == randomAlp.G[2]){
            result += "X"
        }
        else if(randomAlp.G[i] == randomAlp.G[3]){
            result += "F"
        }
        else if(randomAlp.G[i] == randomAlp.G[4]){
            result += "G"
        }
    }
}
console.log(word.length)
console.log("Result", result);
result = result.split("");
let finalResult = "";
let p = ""
let o = ""
let s = ""
let t = ""
let iP = 15
let iO = 14
let iS = 18
let iT = 19
alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet = alphabet.split("");
let codeW = "post";
for(let j = 0; j < 1; j++){
    p = result[j] + result[j+1];
    o = result[j+2] + result[j+3];
    s = result[j+4] + result[j+5];
    t = result[j+6] + result[j+7];
    finalResult += p + "/" + o + "/" + s + "/" + t;
}
if(alphabet[iP] > alphabet[iO]){
finalResult = o + "/" + p + "/" + s + "/" + t;
codeW = "opst"
}
else if(alphabet[iP] > alphabet[iS]){
    finalResult = o + "/" + s + "/" + p + "/" + t;
codeW = "ospt"
}
else if(alphabet[iP] > alphabet[iT]){
    finalResult = o + "/" + s + "/" + t + "/" + p;
codeW = "ostp"
}
else if(alphabet[iO] > alphabet[iS]){
    finalResult = s + "/" + p + "/" + o + "/" + t;
codeW = "spot"
}
else if(alphabet[iO] > alphabet[iT]){
    finalResult = s + "/" + t + "/" + p + "/" + o;
codeW = "stpo"
}
console.log("Final Result: ", finalResult);
console.log(codeW);