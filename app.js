// document.addEventListener("DOMContentLoaded", function(){
	var button = []
	for(var i =0; i< 10;i++){
		button[i]=document.getElementById('canvas'+ i);
		console.log(button[i])
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
			
			
		}
	}
// });