var giradas = 0;
var div1;
var div2;
var bg_url1;
var bg_url2;
var contadorwin = 0;
var x;
function darvuelta(event){
	giradas += 1;
	if(giradas == 1){
		div1 = event.currentTarget;
		div1.classList.add("hueva");
		bg_url1 = div1.style.backgroundImage;
	}
	if (giradas == 2){
		div2 = event.currentTarget;
			if(div1 == div2){
				div1.classList.remove("hueva");
				div2.classList.remove("hueva");
				giradas=0;
			} 
			else{
				div2.classList.add("hueva");
				bg_url2 = div2.style.backgroundImage;
				giradas=0;
				setTimeout("check()",1000);
			}
		
	}
}

function check(){
	if (bg_url1 != bg_url2){
		div1.classList.remove("hueva");
		div2.classList.remove("hueva");
	}
	else{
		wincondition();
		div1.onclick = '';
		div2.onclick = '';

	}
}

function wincondition(){
	contadorwin +=1;
	if (contadorwin==x){
		alert("You win.");
	}
}