var giradas = 0;
var div1;
var div2;
var id1;
var id2;
var contadorwin = 0;
var win;
var restantes;
var intento;
var nombrescore;
var tiempo;
var marcha=0; //control del temporizador
var cro=0; //estado inicial del cronómetro.
var visor;

//Esta funcion gira las cartas añadiendo el estilo 'hueva', que se encarga del giro de las cartas (div frontal con la imagen general --> div back con la imagen especifica para jugar)
//utiliza el mecanismo 'event' para fijarse en la carta a la cual se le ha hecho click
//classList == la lista total de las clases a las que pertenece un elemento
//una vez giradas dos cartas y haber capturado sus ids pasamos a la funcion check(), con un delay para poder ver las cartas.
//intentos() suma el intento al total. Mas adelante hay mas detalle.
function darvuelta(event){
	giradas += 1;
	if(giradas == 1){
		intentos();
		div1 = event.currentTarget;
		div1.classList.add("hueva");
		id1 = div1.id;
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
			id2 = div2.id;
			giradas=0;
			setTimeout("check()",750);
		}
	}
}

//check() se ocupa de comparar las dos cartas previamente seleccionadas. Los ids son capturados en la anterior funcion.
//Dos divs tendrán las mismas cartas en el back si tienen la misma id, por eso podemos compararlos.
//Si la comparación no resulta, se procede a eliminar la clase del giro (hueva) para que revierta los cambios.
//Si la comparación resulta, se llama a las funciones correspondientes y se elimina la capacidad de hacer click en las cartas que ya han sido emparejadas
function check(){
	//intentos();
	if (id1 != id2){
		div1.classList.remove("hueva");
		div2.classList.remove("hueva");
	}
	else{
		contadorparejahecha();
		div1.onclick = '';
		div2.onclick = '';
		wincondition();

	}
}

//winconditioninit() establece el contador de parejas, parejas totales e intentos. Inicialmente, por el php, la página tiene escrita el numero total de parejas. 
//Solo hay que recojer dos variables, una con parejas totales y otra para ir sumando los intentos.
function winconditioninit(){
	win = document.getElementById('check').innerHTML;
	restantes = win;
	visor=document.getElementById("reloj"); //localizar pantalla del reloj
	empezar();
}
//
function intentos(){
	intento = document.getElementById('check2').innerHTML;
	intento = Number(intento);
	intento += 1;
	document.getElementById('check2').innerHTML = intento;
}

function contadorparejahecha(){
	restantes = restantes - 1;
	document.getElementById('check').innerHTML = restantes;
}

function nombreparascore() {
	var nombre = prompt("Introduce tu nombre:","");
	nombrescore = nombre;
}

function wincondition(){
	contadorwin=contadorwin+1;
	if (contadorwin==win){
		parar();
		alert("WIN!");
		score();
	}
	
}

function score() {
	nombreparascore();
	var tabla = document.getElementById('tableroide');
	var fila = tabla.insertRow(-1);
	var casillanombre = fila.insertCell(0);
	var casillaintentos = fila.insertCell(1);
	var casillatiempo = fila.insertCell(2)
	casillanombre.innerHTML = nombrescore;
	casillaintentos.innerHTML = intento;
	casillatiempo.innerHTML = tiempo;
	document.getElementById("textoranking").value = nombrescore+","+intento+","+tiempo;
}

function empezar() {
	if (marcha==0) { //solo si el cronómetro esta parado
		emp=new Date() //fecha actual
		elcrono=setInterval(tiempo,10); //función del temporizador.
        marcha=1 //indicamos que se ha puesto en marcha.
	}
}

function tiempo() { //función del temporizador
	actual=new Date() //fecha en el instante
    cro=actual-emp //tiempo transcurrido en milisegundos
    cr=new Date() //fecha donde guardamos el tiempo transcurrido
    cr.setTime(cro) 
    cs=cr.getMilliseconds() //milisegundos del cronómetro
    cs=cs/10; //paso a centésimas de segundo.
    cs=Math.round(cs)
    sg=cr.getSeconds(); //segundos del cronómetro
    mn=cr.getMinutes(); //minutos del cronómetro
	if (cs<10) {
		cs="0"+cs;
	} //poner siempre 2 cifras en los números
	if (sg<10) {
		sg="0"+sg;
	} 
	if (mn<10) {
		mn="0"+mn;
	} 
    visor.innerHTML=mn+":"+sg+":"+cs; //pasar a pantalla.
}

function parar() {
         if (marcha==1) { //sólo si está en funcionamiento
            clearInterval(elcrono); //parar el crono
            marcha=0; //indicar que está parado.
			tiempo = document.getElementById('reloj').innerHTML;
            }		
}