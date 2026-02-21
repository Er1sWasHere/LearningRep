function print(array) {
  if (array.length == 0) {
    return;
  }
  console.log(array[0]);
  print(array.slice(1));
}
print([71, 26, 34, 24, 58]);