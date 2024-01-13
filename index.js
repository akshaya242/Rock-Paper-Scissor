var userChoice;
var compChoice;

var gameElements = ["Rock", "Paper", "Scissor"];



    
    
    playGame();

function playGame(){
    //create random number from 0 to 2 
var randomIndex = Math.floor(Math.random() * 3);
compChoice = randomIndex;



function decideUderChoice(){
    $("#rock").click(()=>{
        userChoice = 0;
        $("button")[1].setAttribute("disabled", true);
        $("button")[2].setAttribute("disabled", true);
        chooseWinner();
        $("h2")[0].innerHTML = text;    
    })  

    $("#paper").click(()=>{
        userChoice = 1;
        $("button")[0].setAttribute("disabled", true);
        $("button")[2].setAttribute("disabled", true);
        chooseWinner();
        $("h2")[0].innerHTML = text;
         
       
    })

    $("#scissor").click(()=>{
        userChoice = 2;
        $("button")[1].setAttribute("disabled", true);
        $("button")[0].setAttribute("disabled", true);
        chooseWinner();
        $("h2")[0].innerHTML = text;   
    })
}
var text = ""
function chooseWinner(){
    if(userChoice == compChoice){
        text =  `Computer's Choice: ${gameElements[randomIndex]} <br /> 😌 It's a tie`;
        const audio = new Audio("./sounds/tie.mp3");
        audio.play();
        
    }

    else{
        if((userChoice == 0 && compChoice == 2 ) || (userChoice == 1 && compChoice == 0) || (userChoice == 2 && compChoice == 1)){
            text =   `Computer's Choice: ${gameElements[randomIndex]} <br /> ❤️‍🔥 You Won!!!!`;
              
            const audio = new Audio("./sounds/won.mp3");
            audio.play();
            

        }

        else{
            text =  `Computer's Choice: ${gameElements[randomIndex]} <br /> 😈 Oops!! Computer Won!`;
            const audio = new Audio("./sounds/lost.mp3");
            audio.play();
        }
    }
}

decideUderChoice();
}

playGame();


$("#refresh").click(function refreshPage(){
    window.location.reload();
} )



