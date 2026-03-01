let name = document.getElementById("NameNSurN");
let nick = document.getElementById("Nickname");
let email = document.getElementById("email");
let usTr = document.createElement("tr");
let usTd = document.createElement("td");
let usTd2 = document.createElement("td");
let usTd3 = document.createElement("td");
let usTd4 = document.createElement("td");
usTr.appendChild(usTd);
usTr.appendChild(usTd2);
usTr.appendChild(usTd3);
usTr.appendChild(usTd4);
let table = document.getElementById("table");
let button = document.getElementById("smth");
button.addEventListener("click", function(event){
    let nameValue = name.value;
    let nickValue = nick.value;
    let emailValue = email.value;
    usTd.innerText = nameValue;
    usTd2.innerText = nickValue;
    usTd3.innerText = emailValue;
    usTd4.innerText = "false";
    table.appendChild(usTr);
})