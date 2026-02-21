let n1 = 192
let n2 = 132
let n3 = 0
n3 = n1 << 8
n3 = n3 | n2
console.log(n3)
n3 = n3 & 255
console.log(n3)
n3 = n3 << 1
console.log(n3)