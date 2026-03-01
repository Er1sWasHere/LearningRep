let input = document.getElementById("Find");
let button1 = document.getElementById("submit");
let t1 = document.getElementById("t1").innerText;
let t2 = document.getElementById("t2").innerText;
let t3 = document.getElementById("t3").innerText;
let t4 = document.getElementById("t4").innerText;
let t5 = document.getElementById("t5").innerText;
let t6 = document.getElementById("t6").innerText;
let t7 = document.getElementById("t7").innerText;
let t8 = document.getElementById("t8").innerText;
let t9 = document.getElementById("t9").innerText;
let t10 = document.getElementById("t10").innerText;
let tT1 = document.getElementById("t1T1").innerText;
let trS = document.querySelectorAll ('tr')
let Word = [];
let alWord = []
button1.addEventListener("click", function(event){
    event.preventDefault();
    let letter = input.value;
    alert("The letter you entered is: " + letter);
    for(let i = 0; i < trS.length; i++){ 
        let td = trS[i].querySelector('td:first-child');
        trS[i].classList.remove("highlight");
        trS[i].classList.remove("none");
        Word = [];
        if (letter == "" || letter == " "){
            trS[i].classList.remove("none");
            trS[i].classList.remove("highlight");       
        }
        if(td.innerText.includes(letter) && letter  != "" && letter != " " && letter != null && letter != undefined && !trS[i].classList.contains("highlight")){
            Word.push(td);
            alWord.push(td.innerText);
            trS[i].classList.add("highlight");
            trS[i].classList.remove("none");
        }
        if(!trS[i].classList.contains("highlight") && letter != "" && letter != " "){
            trS[i].classList.add("none");
            trS[i].classList.remove("highlight");
        }
    }
    alert("Found words: " + alWord);
    Word.forEach((t) => t.classList.add("highlight"));
    Word = [];
    alWord = [];
})