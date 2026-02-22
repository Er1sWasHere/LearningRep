let input = document.getElementById("Find");
let button = document.getElementById("submit");
let td1 = document.getElementById("t1");
let td2 = document.getElementById("t2");
let td3 = document.getElementById("t3");
let td4 = document.getElementById("t4");
let td5 = document.getElementById("t5");
let td6 = document.getElementById("t6");
let td7 = document.getElementById("t7");
let td8 = document.getElementById("t8");
let td9 = document.getElementById("t9");
let td10 = document.getElementById("t10");
let arrt1 = td1.innerText.split("");
let arrt2 = td2.innerText.split("");
let arrt3 = td3.innerText.split("");
let arrt4 = td4.innerText.split("");
let arrt5 = td5.innerText.split("");
let arrt6 = td6.innerText.split("");
let arrt7 = td7.innerText.split("");
let arrt8 = td8.innerText.split("");
let arrt9 = td9.innerText.split("");
let arrt10 = td10.innerText.split("");
let Word = ""
let allArtt = arrt1.concat(arrt2, arrt3, arrt4, arrt5, arrt6, arrt7, arrt8, arrt9, arrt10);
button.addEventListener("click", function(event){
    event.preventDefault();
    let letter = input.value;
    if(letter.length > 1){
        alert("An error, you must enter only one character.");
        input.value = "";
    }
    for(let i = 0; i < allArtt.length; i++){
        if(allArtt[i] === letter){
            alert("Found!");
            if(allArtt[i + 1] == " "){
                alert("The word is: " + allArtt[i]);
                break
            }
            else{
                Word = Word + allArtt[i];
                alert(Word);
            }
        }
        continue
    }
})