let problem = "15.4 + 13.2";
let txt = problem.split(" ")
let nS = [parseFloat(txt[0]), parseFloat(txt[2])]
let result = 0
let primeri = [nS[0] + nS[1], nS[0] - nS[1], nS[0] / nS[1], nS[0] * nS[1],]
let znaki = ["+", "-", "/", "*"];
for(i = 0; i < 5; i++){
    if(txt[1] == znaki[i]){
        alert(primeri[i])
    }
}
