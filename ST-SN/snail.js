let array = [[1,2,3],
             [4,5,6],
             [7,8,9]];
let snail = [];
let count = 0;
for(let i = 0; i < 1; i++) {
    if(count >= array.length * array.length) {
        break;
    }
for(let j = 0; j < 3; j++) {
    snail.push(array[0][j]);
    count++;
}
for(let k = 1; k < 2; k++) {
    snail.push(array[k][2]);
    count++;
}
for(let l = 2; l >= 0; l--) {
    snail.push(array[2][l]);
    count++;
}
for(let m = 1; m < 2; m++) {
    snail.push(array[m][0]);
    count++;
}
}
snail.push(array[1][1]);

alert(snail);