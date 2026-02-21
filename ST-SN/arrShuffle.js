let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    let randomNum = Math.floor(Math.random() * arr.length);
    let takenPart = arr.splice(randomNum, 1)[0];
    arr.push(takenPart);
}
console.log(arr);

let left = 0;
let right = arr.length - 1;
while (left < right) {
    for (let i = left; i < right; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    right--;
    for (let i = right; i > left; i--) {
        if (arr[i] < arr[i - 1]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        }
    }
}
left++;
console.log(arr);
