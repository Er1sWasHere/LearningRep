let Hpole = document.getElementById('field')
let field = []
let saper = function(pole){
    pole = []
    for(let o = 0; o < 10; o++){
        pole.push([0,0,0,0,0,0,0,0,0,0])
    }
    return(pole)
}
field = saper(field)
    let i = Math.floor(Math.random() * 9);
    let j = Math.floor(Math.random() * 9);

for(let o = 0; o < 10; o++){
    let i = Math.floor(Math.random() * 10);
    let j = Math.floor(Math.random() * 10);
    
    if(field[i][j] == 9){
        continue
    }
    field[i][j] = 9
    if(i > 0 && j > 0 && field[i-1][j-1] != 9){
        field[i-1][j-1] += 1
    }
    if(i > 0 && field[i-1][j] != 9){
        field[i-1][j] += 1
    }
    if(i > 0 && j < 9 && field[i-1][j+1] != 9){
        field[i-1][j+1] += 1
    }
    if(j > 0 && field[i][j-1] != 9){
        field[i][j-1] += 1
    }
    if(j < 9 && field[i][j+1] != 9){
        field[i][j+1] += 1
    }
    if(i < 9 && j > 0 && field[i+1][j-1] != 9){
        field[i+1][j-1] += 1
    }
    if(i < 9 && field[i+1][j] != 9){
        field[i+1][j] += 1
    }
    if(i < 9 && j < 9 && field[i+1][j+1] != 9){
        field[i+1][j+1] += 1
    }
}
console.log(field)
for(let i = 0; i < field.length; i++){
    for(let j = 0; j < field[i].length; j++){
    let nTr = document.createElement('div')
    if(field[i][j] == 9){
        nTr.classList.add('mine')
        nTr.classList.add('hidden')
    }
    else if(field[i][j] == 0){
        nTr.innerText = ' '
        nTr.classList.add('hidden')
    }
    else{
        nTr.innerText = field[i][j]
        nTr.classList.add('hidden')
    }
    Hpole.appendChild(nTr)
    }
}
let cells = Hpole.querySelectorAll('div')
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        cell.classList.remove('hidden')
        for(let i = 0; i < field.length; i++){
            for(let j = 0; j < field[i].length; j++){
                if(сells[index+1] == ' '){
                    cells[index+1].classList.remove('hidden')
                }
                if(сells[index-1] == ' '){
                    cells[index-1].classList.remove('hidden')}
                }}})})
