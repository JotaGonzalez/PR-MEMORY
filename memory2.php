<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="memorystyle.css">
	<script type="text/javascript" src="memoryactions.js"></script>

</head>
<body>
	<?php
	$selectOption= $_POST['numeru'];
	echo $selectOption;
	$numero = $selectOption * $selectOption;
	echo $numero;
	for($i=0;$i<=$numero;$i++){
		echo "<div class='flip-container' id='$i' onclick='darvuelta(event)'>
				<div class='flipper'> 
					<div class='front'>
					</div>
					<div class='back'>
					</div>
				</div>
			</div>";
	}
?>
</body>
</html>