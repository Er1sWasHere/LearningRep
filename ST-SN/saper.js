let Hpole = document.getElementById('field')
let field = []
let saper = function (pole) {
    pole = []
    for (let o = 0; o < 10; o++) {
        pole.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
    return (pole)
}
field = saper(field)
let i = Math.floor(Math.random() * 9);
let j = Math.floor(Math.random() * 9);

for (let o = 0; o < 10; o++) {
    let i = Math.floor(Math.random() * 10);
    let j = Math.floor(Math.random() * 10);

    if (field[i][j] == 9) {
        continue
    }
    field[i][j] = 9
    if (i > 0 && j > 0 && field[i - 1][j - 1] != 9) {
        field[i - 1][j - 1] += 1
    }
    if (i > 0 && field[i - 1][j] != 9) {
        field[i - 1][j] += 1
    }
    if (i > 0 && j < 9 && field[i - 1][j + 1] != 9) {
        field[i - 1][j + 1] += 1
    }
    if (j > 0 && field[i][j - 1] != 9) {
        field[i][j - 1] += 1
    }
    if (j < 9 && field[i][j + 1] != 9) {
        field[i][j + 1] += 1
    }
    if (i < 9 && j > 0 && field[i + 1][j - 1] != 9) {
        field[i + 1][j - 1] += 1
    }
    if (i < 9 && field[i + 1][j] != 9) {
        field[i + 1][j] += 1
    }
    if (i < 9 && j < 9 && field[i + 1][j + 1] != 9) {
        field[i + 1][j + 1] += 1
    }
}
console.log(field)
for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
        let nTr = document.createElement('div')
        if (field[i][j] == 9) {
            nTr.classList.add('mine')
            nTr.classList.add('hidden')
        }
        else if (field[i][j] == 0) {
            nTr.innerText = ' '
            nTr.classList.add('hidden')
        }
        else {
            nTr.innerText = field[i][j]
            nTr.classList.add('hidden')
        }
        Hpole.appendChild(nTr)
    }
}
let cells = Hpole.querySelectorAll('div')
function open(i, j) {
    if (i < 0 || i > 10 || j < 0 || j > 10) return;

    let cellIndex = i * 10 + j;
    let cell = cells[cellIndex];

    if (!cell.classList.contains('hidden')) return;

    if (field[i][j] == 10) {
        cell.classList.remove('hidden');
        console.log('Game Over! You hit a mine!');
        return;
    }

    cell.classList.remove('hidden');

    if (field[i][j] == 0) {
        open(i - 1, j - 1);
        open(i - 1, j);
        open(i - 1, j + 1);
        open(i, j - 1);
        open(i, j + 1);
        open(i + 1, j - 1);
        open(i + 1, j);
        open(i + 1, j + 1);
    }
}
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        i = Math.floor(index / 10)
        j = index % 10
        field[i][j]
        open(i, j)
    }
    )
})



