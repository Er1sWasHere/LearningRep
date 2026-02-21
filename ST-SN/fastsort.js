let arr = [1, 7, 4, 6, 3, 2]; //массив
function fastSort(arr) {
    alert(arr); //выводится каждый проход
    if (arr.length <= 1) {
        return arr; //если массив стал переменной (1 элемент, либо вообще 0) то его вернёт
    }
    let left = []; //пустые массивы лево и право
    let right = [];
    let midInd = Math.floor(arr.length / 2); //середина массива
    let mid = arr[midInd]; 
    for (let i = 0; i < arr.length; i++) {
        if (i == midInd) { //если i серединка, то её пропустит
            continue;
        }
        if (arr[i] < mid) {
            left.push(arr[i]); //если элемент меньше середины, то он уходит налево
        } else {
            right.push(arr[i]); //направо
        }
    }
    return [...fastSort(left), mid, ...fastSort(right)]; //рекурсия, вызывается функция с массивами лево и право, сортирует уже их
}
console.log(fastSort(arr)); //вызов