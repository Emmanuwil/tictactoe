function updateCell() {
    this.textContent = currentPlayer.mark
    if (currentPlayer.mark == "X"){
        currentPlayer = oPlayer
    }
    else currentPlayer = xPlayer
}
let xPlayer = {
    mark: "X",
    name: "player1"
}
let oPlayer = {
    mark: "O",
    name: "player2"
}
let currentPlayer = xPlayer
let cells = document.getElementsByClassName("cell")
 for (let cell of cells){
     cell.onclick = updateCell
 }