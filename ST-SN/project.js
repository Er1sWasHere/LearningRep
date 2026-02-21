let a = 7;
if(a % 2){
    console.log("(НЕ)Чётное число");
}
else{
    console.log("Чётное число");
}
let b = 5;
switch(b){
    case 1: "Неудовлетвор."; break;
    case 2: "Неудовлетвор."; break;
    case 3: "Всё ещё неудовлетвор."; break;
    case 4: "Удовлетворительно"; break;
    case 5: "100% Удовлетворительно"; break;
    default: "Это не оценка"; break;
}

let sum = 0;
while(sum < 100){
    let usNum = prompt();
    sum += usNum;
}

for(let num = 0; num < 100; num += 2){
    print(num);
}

a.array.forEach(element => { });