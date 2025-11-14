const btnContainer = document.getElementById('btnContainer');
const myScoreText = document.getElementById('myScore');
const computerScoreText = document.getElementById('computerScore');




btnContainer.addEventListener('click', (e)=>{
    const randNumber = Math.floor(Math.random()*3 +1);
    console.log(randNumber);
    if(e.target.matches("#rock")){
        if(computerChoice(randNumber)==="rock"){
            alert ("Draw")
        }
        else if(computerChoice(randNumber)==="paper"){
            alert ("You Loose")
        }
        else if(computerChoice(randNumber)==="scissors"){
            alert ("You Win")
        }
    } 
    else if(e.target.matches("#paper")){
        if(computerChoice(randNumber)==="rock"){
            alert ("You Win")
        }
        else if(computerChoice(randNumber)==="paper"){
            alert ("DRAW")
        }
        else if(computerChoice(randNumber)==="scissors"){
            alert ("You Loose")
        }
    }
    else if (e.target.matches("#scissors")){
        if(computerChoice(randNumber)==="rock"){
            alert ("You Loose")
        }
        else if(computerChoice(randNumber)==="paper"){
            alert ("You Win")
        }
        else if(computerChoice(randNumber)==="scissors"){
            alert ("DRAW")
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
