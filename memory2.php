
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="memorystyle.css">
	<link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed" rel="stylesheet">
	<script type="text/javascript" src="memoryactions.js"></script>


</head>
<body onload="winconditioninit()">

<audio id="audiouno" src="correct.wav" type="audio/wav"></audio>
<audio id="audiodos" src="incorrect.wav" type="audio/wav"></audio>
<audio id="audiotres" src="flip.wav" type="audio/wav"></audio>

	<?php

	$jarray = [];
	$selectOption = $_POST['numeru'];
	$numero = $selectOption * $selectOption;
	$parejas=$numero/2;
	echo "<div class='marcadorbig'> <div class='marcador4' id='reloj'>00:00:00</div><div class='marcador1' >Parejas restantes:<p id='check'>$parejas</p></div> <div class='marcador2'>Intentos: <p id='check2'>0</p></div> <div class='marcador3'>Scores </br> <table id='tableroide'>";
	$myfile = fopen("scoreboard.txt", "r") or die("Unable to open file!");
	while (!feof($myfile)){   
    	$data = fgets($myfile); 
    	echo "<tr><td>" . str_replace(',','</td><td>',$data) . '</td></tr>';
	}
	fclose($myfile);
	echo "</table></div><div class='marcador5'><button id='halp' onclick='halp()'>Halp</button></div></div>";

	for($j=0;$j<$numero/2;$j++){
		$j=$j+1;
		array_push($jarray,"carta".$j);
		array_push($jarray,"carta".$j);
		$j=$j-1;
	}
	shuffle($jarray);

	if ($selectOption == 2){
		echo "<div id='mode'>2x2</div>";
		echo "<div class='contingut2'>";
		for($i=0;$i<$numero;$i++){
			$carta=$jarray[$i];
			echo "<div class='flip-container' id='$jarray[$i]' onclick='darvuelta(event)'><div class='flipper'><div class='front'><img src='images/cartamtg.jpg'></div><div class='back'><img src='images/$carta.jpg'></div></div></div>";
		}
		echo"</div>";
	}
	elseif ($selectOption == 4){
		echo "<div id='mode'>4x4</div>";
		echo "<div class='contingut4'>";
		for($i=0;$i<$numero;$i++){
			$carta=$jarray[$i];
			echo "<div class='flip-container' id='$jarray[$i]' onclick='darvuelta(event)'><div class='flipper'><div class='front'><img src='images/cartamtg.jpg'></div><div class='back'><img src='images/$carta.jpg'></div></div></div>";
		}
		echo "</div>";
	}
	elseif ($selectOption == 6){
		echo "<div id='mode'>6x6</div>";
		echo "<div class='contingut6'>";
		for($i=0;$i<$numero;$i++){
			$carta=$jarray[$i];
			echo "<div class='flip-container' id='$jarray[$i]' onclick='darvuelta(event)'><div class='flipper'><div class='front'><img src='images/cartamtg.jpg'></div><div class='back'><img src='images/$carta.jpg'></div></div></div>";
		}
		echo"</div>";
		}
	elseif ($selectOption == 8){
		echo "<div id='mode'>8x8</div>";
		echo "<div class='contingut8'>";
		for($i=0;$i<$numero;$i++){
			$carta=$jarray[$i];
			echo "<div class='flip-container' id='$jarray[$i]' onclick='darvuelta(event)'><div class='flipper'><div class='front'><img src='images/cartamtg.jpg'></div><div class='back'><img src='images/$carta.jpg'></div></div></div>";
		}
		echo"</div>";
	}
?>
<div class="botonsuelo">
	<form action="ranking.php" method="POST">
		<input type="hidden" name="textoranking" value="" id="textoranking"></input>
		<button>Gugar</button>
	</form>
</div>
</body>
</html>