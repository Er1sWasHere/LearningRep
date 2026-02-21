let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numToFind = 9;

let startar = 0;
let endar = array.length;

while (startar <= endar) {
  let middle = Math.floor((startar + endar) / 2);
  console.log(middle);
  if (array[middle] == numToFind) {
    console.log("Number was found");
    break;
  } else if (array[middle] < numToFind) {
    startar = middle + 1;
  } else {
    endar = middle - 1;
  }
}
