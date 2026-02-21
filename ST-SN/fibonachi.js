let n1 = 0;
let n2 = 1;
let nS= []
    let ammount = parseInt(prompt("Insert how many times will cycle repeat"))
for (let i = 0; i < ammount; i++) {
  nS.push(n1);
  n2 = n1 + n2;
  n1 = n2 - n1;
}
console.log(nS)