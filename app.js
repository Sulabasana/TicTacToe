// document.addEventListener("DOMContentLoaded", function(){
	var button = []
	for(var i =0; i< 10;i++){
		button[i]=document.getElementById('canvas'+ i);
		// console.log(button[i])
	}
	var ctx = [];
	for(var i =1; i<10;i++){
		ctx[i] = button[i].getContext('2d') //bez tego nie będzie można rysować po canvasie
	}
	var bDisabled =[];
	for(var i =1; i<10;i++){
		bDisabled[i] = false; //czy zablokować button
	}
	var isResult = false //jeżeli to koniec gry to stop
	var content =[];//trzyma informację o elemencie canvas
	
	function loop(x){
		
		if(!bDisabled[x]){ //jeżeli jest równe false to uruchom

			bDisabled[x] = true;//niechcemy żeby ten sam przycisk był dostepny do kliknięcia cały czas
			button[x].style.opacity = 0.7;//każdy przycisk po kliknięciu zmieni wygląd
			content[x] = 'x';//to zdecyduje o zwycięstwie

			button[x].style.webkitTransform = "rotateY(180deg)";
			setTimeout(function(){ //dla opóźnienia
				ctx[x].lineWidth = 3;//grubośc lini
				ctx[x].beginPath(); //zacznij
				ctx[x].moveTo(10,10); //punkt początkowy (x,y)
				ctx[x].lineTo(90,90);//punkt końcowy
				ctx[x].moveTo(90,10);
				ctx[x].lineTo(10,90);
				ctx[x].stroke(); //rób linie
				ctx[x].closePath();//koniec drogi

				computerTurn();
			},300)
		setTimeout(checkWinner,1000);
		}
		
	}
function computerTurn(){
	var r = Math.random();

	if(r< 0.1 && !bDisabled[1]) {  //jeżeli r jest mniejsze od 0.1 i bDisablde jest FALSE to uruchom fukcje
		draw0Steps(1) //to wywołaj funkcję draw0Steps na 1 elemencie
	}else if(r< 0.2 && !bDisabled[2]) draw0Steps(2);
	else if(r< 0.3 && !bDisabled[3]) draw0Steps(3);
	else if(r< 0.4 && !bDisabled[4]) draw0Steps(4);
	else if(r< 0.5 && !bDisabled[5]) draw0Steps(5);
	else if(r< 0.6 && !bDisabled[6]) draw0Steps(6);
	else if(r< 0.7 && !bDisabled[7]) draw0Steps(7);
	else if(r< 0.8 && !bDisabled[8]) draw0Steps(8);
	else if(r< 0.9 && !bDisabled[9]) draw0Steps(9);
	else computerTurn();
}
function draw0Steps(x){
	bDisabled[x] = true; //jeżeli 0 zostanie narysowane na pozycji nr 5 to zablokuj przycisk
	button[x].style.opacity = 0.7;
	content[x]= '0'; //kto wygrał
	button[x].style.webkitTransform = "rotateX(180deg)";

	setTimeout(function(){

	ctx[x].beginPath();
	ctx[x].lineWidth = 3;
	ctx[x].arc(50,50,34,0,Math.PI*2,false);
	ctx[x].stroke();
	ctx[x].closePath();
	}, 300)
}
function checkWinner(){
	if(!isResult){//isResult === false
		if(content[1] == 'x' && content[2] == 'x' && content[3] == "x") showWinner("You win!");
		else if(content[4] == 'x' && content[5] == 'x' && content[6] == "x") showWinner("You win!");
		else if(content[7] == 'x' && content[8] == 'x' && content[9] == "x") showWinner("You win!");
		else if(content[1] == 'x' && content[4] == 'x' && content[7] == "x") showWinner("You win!");
		else if(content[2] == 'x' && content[5] == 'x' && content[8] == "x") showWinner("You win!");
		else if(content[3] == 'x' && content[6] == 'x' && content[9] == "x") showWinner("You win!");
		else if(content[1] == 'x' && content[5] == 'x' && content[9] == "x") showWinner("You win!");
		else if(content[3] == 'x' && content[5] == 'x' && content[7] == "x") showWinner("You win!");
	
		else if(content[1] == '0' && content[2] == '0' && content[3] == "0") showWinner("You lose!");
		else if(content[4] == '0' && content[5] == '0' && content[6] == "0") showWinner("You lose!");
		else if(content[7] == '0' && content[8] == '0' && content[9] == "0") showWinner("You lose!");
		else if(content[1] == '0' && content[4] == '0' && content[7] == "0") showWinner("You lose!");
		else if(content[2] == '0' && content[5] == '0' && content[8] == "0") showWinner("You lose!");
		else if(content[3] == '0' && content[6] == '0' && content[9] == "0") showWinner("You lose!");
		else if(content[1] == '0' && content[5] == '0' && content[9] == "0") showWinner("You lose!");
		else if(content[3] == '0' && content[5] == '0' && content[7] == "0") showWinner("You lose!");
	}
}
function showWinner(x){
	alert(x);
	isResult = true;
}
// });