
function generateRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

let randomNumber = generateRandomNumber();
console.log("Random Number:", randomNumber); 
let chances = 3;
for(let i =0; i<3; i++){
    function checkGuess() {
        let inptNumber = document.getElementById("userGuess").value;
        inptNumber = Number(inptNumber);
    
        if (inptNumber == randomNumber) {
            alert("Congratulations! You guessed the correct number.");
          
            randomNumber = generateRandomNumber();
            console.log("New Random Number:", randomNumber); 
        } else {
            if(inptNumber==randomNumber-1 || inptNumber==randomNumber+1){
                alert("The number is near..")
            }else if(inptNumber>randomNumber){
                alert("The number is high")
            }else{
                alert("The number is too low...")
            }
            chances--;
            document.getElementById("chancesDisplay").innerText = `Chances remaining: ${chances}`;
            if(chances==0){
                alert("You Have lost.........");
                
            }
        }
    }
}

function reloadPage(){
    setTimeout(() => {
        location.reload();
    }, 2000);
}