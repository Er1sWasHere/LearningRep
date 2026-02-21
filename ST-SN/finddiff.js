function findUniq(arr) {
  for (let n of arr) {
    if (arr.indexOf(n) == arr.lastIndexOf(n)) {
      alert(n);
      return;
    }
  }
}

findUniq([1, 1, 1, 2, 1, 1]);
findUniq([0, 0, p, 0, 0]);