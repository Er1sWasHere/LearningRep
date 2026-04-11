let num = 1264;
num = num.toString();
let word = [];
units = [' thousands', ' thousand', ' hundreds', ' hundred', 'ty', ''];
let toSpell = num.split("");
for (let i = 0; i < toSpell.length; i++){
    if (toSpell[i] == "0"){
        word.push("zero");
    }
    else if (toSpell[i] == "1"){
        word.push("one");
    }
    else if (toSpell[i] == "2"){
        word.push("two");
    }
    else if (toSpell[i] == "3"){
        word.push("three");
    }
    else if (toSpell[i] == "4"){
        word.push("four");
    }
    else if (toSpell[i] == "5"){
        word.push("five");
    }
    else if (toSpell[i] == "6"){
        word.push("six");
    }
    else if (toSpell[i] == "7"){
        word.push("seven");
    }
    else if (toSpell[i] == "8"){
        word.push("eight");
    }
    else if (toSpell[i] == "9"){
        word.push("nine");
    }
}
for (let i = 0; i < word.length; i++) {
    if(i == 3){
        if(word[i] == "one"){
            word[i] += units[3]
        }
        else{
        word[i] += units[5];
        }
}
    if(i == 2) {
        if(word[i] == "one"){
            word[i] = "ten"
            continue
        }
        if(word[i] == "two"){
            word[i] = "twenty"
            continue
        }
        if(word[i] == "three"){
            word[i] = "thirty"
            continue
        }
        if(word[i] == "four"){
            word[i] = "forty"
            continue
        }
        if(word[i] == "five"){
            word[i] = "fifty"
            continue
        }
        else{
            word[i] += units[4];
        }
}
    else if (i == 1) {
        word[i] += units[2];
}
    else if (i == 0) {
        if(word[i] == "one"){
            word[i] += units[1]
        }
        else{
            word[i] += units[0];
        }
}
}
alert(num + "\n" + word.join(" "))