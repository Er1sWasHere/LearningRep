let d3 = [1, 2, 3];
let times = 0
function dThrow(arr){
    if(arr.length == 0){
        return "D0?";
    }
    let takenPart = [];
    let previousArr = [];
    for (let i = 0; i < arr.length; i++) {
        let firstEl = arr[i];
        takenPart.push(firstEl);
        if(takenPart.length == 2){
            console.log(takenPart);
            previousArr = [...takenPart];
        }
        else{
            continue
        }
        if(previousArr[i] == takenPart[i]){
            takenPart[i] = takenPart[i + 1];
            if(takenPart[i + 1] == undefined){
                takenPart[i + 1] = takenPart[i - 1];
            }
            else if(takenPart[i - 1] == undefined){
                takenPart[i - 1] = 0;
            }
            console.log(takenPart);
        }
        else if(previousArr == takenPart){
            break
        }
        }
}
console.log(dThrow(d3));