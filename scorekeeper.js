var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Scoring = document.querySelector("#p1p");
var p2Scoring = document.querySelector("#p2p");
var numInput= document.querySelector('input');
var changedScore = document.querySelector("h4 span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//adding score to player 1 
p1Button.addEventListener("click", function() {
	if(!gameOver){
		p1Score++;
		
		if(p1Score === winningScore) {
			gameOver = true;
			p1Scoring.classList.add("winner");
		}
		
	}
	
	p1Scoring.textContent = p1Score;


});

//adding score to player 2

p2Button.addEventListener("click", function() {
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
			p2Scoring.classList.add("winner")
		}

	}	
	
	p2Scoring.textContent = p2Score;


});

//reset button

resetButton.addEventListener("click", function() {
	reset();
	

});

//function to reset score values

function reset() {
	p1Score=0;
	p2Score=0;
	p1Scoring.textContent= 0;
	p2Scoring.textContent = 0;
	p1Scoring.classList.remove("winner");
	p2Scoring.classList.remove("winner");
	gameOver= false;
}


//changing the playing to
numInput.addEventListener("change", function(){

	changedScore.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();



});


