let input = document.getElementById("Find");
let button = document.getElementById("submit");
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
button.addEventListener("click", function(event){
    event.preventDefault();
    let letter = input.value;
    alert("The letter you entered is: " + letter);
    for(let i = 0; i < trS.length; i++){ 
        let td = trS[i].querySelector('td:first-child');
        if(td.innerText.includes(letter)){
            Word.push(td);
            trS[i].classList.add("highlight");
            alWord.push(td.innerText);
        }
        else{
            trS[i].classList.add("none");
        }
        
    }
    alert("Found words: " + alWord);
    Word.forEach((t) => t.classList.add("highlight"));
    Word = [];
})