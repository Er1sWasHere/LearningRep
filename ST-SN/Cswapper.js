let x = [2,5, 9, 8, 4, 6, 3, 1, 7];

for(let i = 0; i < x.length; i++){
    for(let j = i; j > 0 && x[j-1] > x[j]; j--){
        [x[j-1], x[j]] = [x[j], x[j-1]];
    }
}
console.log(x);