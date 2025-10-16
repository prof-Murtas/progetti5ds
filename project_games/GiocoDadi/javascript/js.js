

let arrayImg = ['resources/imgDado1.jpg', 'resources/imgDado2.jpg', 'resources/imgDado3.jpg', 'resources/imgDado4.jpg', 'resources/imgDado5.jpg', 'resources/imgDado6.jpg']
let numRound = 0
let puntDado1 = 0
let puntDado2 = 0
let isPlayable = true

function gioca (){
    if(!isPlayable){
        exit
    }
    numRound ++
    dado1 = Math.floor(Math.random()*6)
    dado2 = Math.floor(Math.random()*6)

    puntDado1 += dado1+1
    puntDado2 += dado2+1

    document.getElementById("round").innerHTML = "Numero round: "+numRound
    document.getElementById("puntDado1").innerHTML = "Punteggio dado 1: "+puntDado1
    document.getElementById("puntDado2").innerHTML = "Punteggio dado 2: "+puntDado2

    document.getElementById("dado1").src = arrayImg[dado1]
    document.getElementById("dado1").alt = arrayImg[dado1]
    document.getElementById("dado2").alt = arrayImg[dado2]
    document.getElementById("dado2").src = arrayImg[dado2]
    
    checkWin(dado1, dado2)
}

function restart(){
    isPlayable = true
    puntDado1 = 0
    puntDado2 = 0
    numRound = 0
    document.getElementById("round").innerHTML = "Numero round: "+numRound
    document.getElementById("puntDado1").innerHTML = "Punteggio dado 1: "+puntDado1
    document.getElementById("puntDado2").innerHTML = "Punteggio dado 2: "+puntDado2
    document.getElementById("winner").innerHTML = "Schiaccia gioca per iniziare "
}



function checkWin (dado1, dado2){

    if(puntDado1>=30 ){
        document.getElementById("winner").innerHTML = "Il dado 1 ha vinto. Schiacciare restart per rigiocare"
        isPlayable = false
        exit
    }else if (puntDado2>=30){
        document.getElementById("winner").innerHTML = "Il dado 2 ha vinto. Schiacciare restart per rigiocare "
        isPlayable = false
        exit
    }

    if(dado1 > dado2){
        document.getElementById("winner").innerHTML = "Il dado 1 ha vinto il "+ (numRound) + " round."
    }else if(dado1 < dado2){
        document.getElementById("winner").innerHTML = "Il dado 2 ha vinto il " + (numRound) + " round."
    }else{
        document.getElementById("winner").innerHTML = "Nessuno ha vinto il " + (numRound) + " round"

    }

}