const btnContainer = document.getElementById('btnContainer');
const myScore = document.getElementById('myScore');
const computerScore = document.getElementById('computerScore');
const resultSentence = document.getElementById('result');
let userCpt=0;
let compCpt=0;


btnContainer.addEventListener('click', (e)=>{
    const randNumber = Math.floor(Math.random()*3 +1);
    console.log(randNumber);
    if(e.target.matches("#rock")){
        if(computerChoice(randNumber)==="rock"){
            resultSentence.innerText= "DRAW !!!"
        }
        else if(computerChoice(randNumber)==="paper"){
            resultSentence.innerText= "You loose! Paper beat the rock !"
            computerScore.innerText=++compCpt;
        }
        else if(computerChoice(randNumber)==="scissors"){
            resultSentence.innerText= "You win! Rock beat the Scissors !"
            myScore.innerText =++userCpt;

        }
    } 
    else if(e.target.matches("#paper")){
        if(computerChoice(randNumber)==="rock"){
            resultSentence.innerText= "You win! Scissors beat the Paper !"
            myScore.innerText =++userCpt;
        }
        else if(computerChoice(randNumber)==="paper"){
            resultSentence.innerText= "DRAW !!!"
        }
        else if(computerChoice(randNumber)==="scissors"){
            resultSentence.innerText= "You loose! Scissors beat the Paper !"
            computerScore.innerText=++compCpt;
        }
    }
    else if (e.target.matches("#scissors")){
        if(computerChoice(randNumber)==="rock"){
            resultSentence.innerText= "You loose! Rock beat the Scissors !"
            computerScore.innerText=++compCpt;
        }
        else if(computerChoice(randNumber)==="paper"){
            resultSentence.innerText= "You win! Scissors beat the Paper!"
            myScore.innerText =++userCpt;
        }
        else if(computerChoice(randNumber)==="scissors"){
            resultSentence.innerText= "DRAW !!!"
        }
    }
})

function computerChoice(number){
    let cptChoice;
    switch (number) {
        case 1:
            cptChoice='rock';
            break;
        case 2:
            cptChoice='paper';
            break;
        case 3:
            cptChoice='scissors';
            break;
    
        default:
            break;
    }
    return cptChoice;
}
