let cells = document.querySelectorAll('.part');
let Comp = 'O';
let player = 'X';
let turn = 0;
let isTaken = false;
let center = 4
function compMove() {
        if (cells[center].innerText == "") {
            let p = document.createElement("p");
            p.innerText = Comp;
            p.classList.add("O");
            cells[center].appendChild(p);
            console.log("pashem")
            turn++;
            return;
            if(cells[center].innerText == Comp){
                return
            }
        }
    if (cells[center].innerText == player) {
        let corners = [0, 2, 6, 8]
        console.log("pashem")
        for (let i = 0; i < 4; i++) {
            if(cells[corners[i]].innerText == ""){
                let p = document.createElement("p");
                p.innerText = Comp;
                p.classList.add("O");
                cells[corners[i]].appendChild(p);
                isTaken = true;
                turn++;
                console.log("pashem")
                break;
            }
        }
            if(!isTaken){
            let otherPos = [1, 3, 5, 7]
            for (let i = 0; i < otherPos.length; i++) {
                if (cells[otherPos[i]].innerText == '') {
                    let p = document.createElement("p");
                    p.innerText = Comp;
                    p.classList.add("O");
                    cells[otherPos[i]].appendChild(p);
                    turn++;
                    console.log("pashem")
                    break;
            }
        }
        }
            }
        }
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (turn % 2 == 0 && cell.innerText == '') {
            let p = document.createElement("p");
            p.innerText = player;
            p.classList.add("Xwe");
            cell.appendChild(p);
            turn++;
            if(turn % 2 != 0){
                compMove();
            }
            else{
                return
            }
        }
        else if(cell.innerText != ""){
            alert("cell taken")
        }
        }
    
)})
console.log(cells)