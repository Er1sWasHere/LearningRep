let array = [95, 5, 3, 22, 1];

for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
        if (array[j] > array[j+1]){
            let expe = array[j];
            array[j] = array[j+1];
            array[j+1] = expe;
        }
    }
}
console.log(array);