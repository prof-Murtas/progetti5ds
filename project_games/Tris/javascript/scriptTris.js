
let matrix = [
    ["E","E","E"], //E vuol dire Empty e nessuno ha ancora inserito niente
    ["E","E","E"],
    ["E","E","E"],

];


let gameStatus = 1 //1 il gioco continua, 0 il gioco è fermo o finito
let numTurno = 0
const giocatori = [];
giocatori.push("X", "O");
currentPlayer="X"


function bottoneTris(idBtn, matrixY, matrixX){
    if(gameStatus == 0){
        alert("Il gioco è finito, schiacciare Restart se vuoi rigiocare")
        return
    }
    if(matrix[matrixY][matrixX] === "E"){
        
        document.getElementById(idBtn).innerHTML= (giocatori[numTurno%2])
        matrix[matrixY][matrixX] = currentPlayer
        numTurno+=1
        checkWin()
        currentPlayer = giocatori[numTurno%2]
        
    }else{
        alert("Il campo inserito è già stato giocato");
    }
   
}


function restart(){
    gameStatus = 1
    matrix= [ 
    ["E","E","E"], 
    ["E","E","E"],
    ["E","E","E"],
    ]
    for(let i = 0; i<9; i++){
        let idBtn = 'b' + (i+1)
        document.getElementById(idBtn).innerHTML= ''
    }
    numTurno = 0
    currentPlayer ="X"
}


function checkWin() {
    // Verifica righe e colonne
    for (let i = 0; i < 3; i++) {
        if (matrix[i][0] == currentPlayer && matrix[i][1] == currentPlayer && matrix[i][2] == currentPlayer){
            alert("Il giocatore " + currentPlayer + " ha vinto")// Vittoria sulla riga i
            gameStatus = 0
        }
            
        if (matrix[0][i] == currentPlayer && matrix[1][i] == currentPlayer && matrix[2][i] == currentPlayer){
            alert("Il giocatore " + currentPlayer + " ha vinto") // Vittoria sulla colonna i
            gameStatus = 0
        }
            
    }
    // Verifica diagonali
    if ((matrix[0][0] == currentPlayer && matrix[1][1] == currentPlayer && matrix[2][2] == currentPlayer) ||
            (matrix[0][2] == currentPlayer && matrix[1][1] == currentPlayer && matrix[2][0] == currentPlayer)){
            alert("Il giocatore " + currentPlayer + " ha vinto") // Vittoria sulla diagonale
            gameStatus=0
    }

    if(numTurno == 9){
        alert("Nessuno ha vinto") // Vittoria sulla diagonale
        gameStatus=0
    }

        
       
}


