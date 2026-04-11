let morskoiboi = function(){
    let array = []
    for(i = 0; i < 10; i++){
        array.push([0,0,0,0,0,0,0,0,0,0])
    }
    return(array)
}
let startPos1 = Math.floor(Math.random() * 9)
let startPos2 = Math.floor(Math.random() * 9)
let array = morskoiboi();
array[startPos1][startPos2] = 1
if(startPos2 + 4 < 10){
    for(i = 0; i < 4; i++){
        array[startPos1][startPos2 + i] = 1
    }
}
else{
    for(i = 0; i < 4; i++){
        array[startPos1][startPos2 - i] = 1
    }
}
let j = 0
while(j < 2){
        if(array[startPos1][startPos2] == 1){
        startPos2 = Math.floor(Math.random() * 9)
        startPos1 = Math.floor(Math.random() * 9)
        }
    else if(startPos2 - 1 >= 0 && array[startPos1][startPos2 - 1] == 1){
        startPos2 = Math.floor(Math.random() * 9)
        startPos1 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 - 1 >= 0 && array[startPos1 - 1][startPos2] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 - 1 >= 0 && startPos2 - 1 >= 0 && array[startPos1 - 1][startPos2 - 1] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    else if(startPos2 + 1 < 10 && array[startPos1][startPos2 + 1] == 1){
        startPos2 = Math.floor(Math.random() * 9)
        startPos1 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 + 1 < 10 && array[startPos1 + 1][startPos2] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 + 1 < 10 && startPos2 + 1 < 10 && array[startPos1 + 1][startPos2 + 1] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    if(startPos2 + 3 < 10){
        for(i = 0; i < 3; i++){
            array[startPos1][startPos2 + i] = 1
        }
    }
    else{
        for(i = 0; i < 3; i++){
            array[startPos1][startPos2 - i] = 1
        }
    }
    j++
}
let k = 0
while(k < 3){
        if(array[startPos1][startPos2] == 1){
        startPos2 = Math.floor(Math.random() * 9)
        startPos1 = Math.floor(Math.random() * 9)
        }
    else if(startPos2 - 1 >= 0 && array[startPos1][startPos2 - 1] == 1){
        startPos2 = Math.floor(Math.random() * 9)
        startPos1 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 - 1 >= 0 && array[startPos1 - 1][startPos2] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 - 1 >= 0 && startPos2 - 1 >= 0 && array[startPos1 - 1][startPos2 - 1] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    else if(startPos2 + 1 < 10 && array[startPos1][startPos2 + 1] == 1){
        startPos2 = Math.floor(Math.random() * 9)
        startPos1 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 + 1 < 10 && array[startPos1 + 1][startPos2] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 + 1 < 10 && startPos2 + 1 < 10 && array[startPos1 + 1][startPos2 + 1] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    if(startPos2 + 2 < 10){
        for(i = 0; i < 2; i++){
            array[startPos1][startPos2 + i] = 1
        }
    }
    else{
        for(i = 0; i < 2; i++){
            array[startPos1][startPos2 - i] = 1
        }
    }
    k++
}
let t = 0
while(t < 4){
        if(array[startPos1][startPos2] == 1){
        startPos2 = Math.floor(Math.random() * 9)
        startPos1 = Math.floor(Math.random() * 9)
        }
    else if(startPos2 - 1 >= 0 && array[startPos1][startPos2 - 1] == 1){
        startPos2 = Math.floor(Math.random() * 9)
        startPos1 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 - 1 >= 0 && array[startPos1 - 1][startPos2] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 - 1 >= 0 && startPos2 - 1 >= 0 && array[startPos1 - 1][startPos2 - 1] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    else if(startPos2 + 1 < 10 && array[startPos1][startPos2 + 1] == 1){
        startPos2 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 + 1 < 10 && array[startPos1 + 1][startPos2] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    else if(startPos1 + 1 < 10 && startPos2 + 1 < 10 && array[startPos1 + 1][startPos2 + 1] == 1){
        startPos1 = Math.floor(Math.random() * 9)
        startPos2 = Math.floor(Math.random() * 9)
    }
    array[startPos1][startPos2] = 1
    t++
}
console.log(array);