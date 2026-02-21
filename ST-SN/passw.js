
let code = "ksroczksxh";
let decrypt = "dog";
let alph = "abcdefghijklmnopqrstuvwxyz";
let answer = "";

for (let i = 0; i < code.length; i++) {
    let keyCh = decrypt[i % decrypt.length];
    let shift = alph.indexOf(keyCh);
    let shifted = alph.slice(shift) + alph.slice(0, shift);
    let codeCh = code[i];
    let originalIn = shifted.indexOf(codeCh);
    answer += alph[originalIn];
}

console.log(answer);