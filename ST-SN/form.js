let button = document.getElementById("submit");
let form = document.getElementById("form");
button.addEventListener("click", function(event){
    event.preventDefault();
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let lName = document.getElementById("lName");
    let email = document.getElementById("email");
    let valid = true;
    if(name.value.length < 3){   
        alert("An error, name cannot be less than 3 characters.");
        name.classList.add("error");
        valid = false;
    }
    else if(name.value.length >= 3){
        name.classList.remove("error");
        valid = true;
    }
    if(lName.value.length < 3){
        alert("An error, last name cannot be less than 3 characters.");
        lName.classList.add("error");
        valid = false;
    }
    else if(lName.value.length >= 3){
        lName.classList.remove("error");
        valid = true;
    }
    if(phone[0] == 0){
        alert("An error, phone number cannot start with 0.");
        phone.classList.add("error");
        valid = false;
    }
    else if(phone[0] != 0){
    // phone.classList.remove("error");
    valid = true;
}
    if(!email.value.includes("@gmail.com")){
        alert("An error, email must end with @gmail.com.");
        email.classList.add("error");
        valid = false;
    }
    if(valid == true){
        form.submit();
    }
})
