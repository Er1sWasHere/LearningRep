let moveZeros = [true,1,0,1,2,0,1,3,"a"]
let newAr = []
for(let i = 0; i < moveZeros.length; i++) {
    if(moveZeros[i] == 0) {
        moveZeros.splice(i, 1)
        moveZeros.push(0)
    }
}
console.log(moveZeros)