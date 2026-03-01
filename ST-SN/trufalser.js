let boo = document.querySelectorAll('td:last-child');
for(let i = 0; i < boo.length; i++){
    boo[i].addEventListener("click", function(event){
        if(boo[i].innerText == "false"){
            boo[i].innerText = "true";
        }
        else if(boo[i].innerText == "true"){
            boo[i].innerText = "false";
        }
    })}