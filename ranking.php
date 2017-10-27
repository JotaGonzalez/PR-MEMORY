<html>
<head>
</head>
<body>
	<?php
	$myfile = fopen("scoreboard.txt", "a") or die("Unable to open file!");
	$txt = $_POST['textoranking'];
	if ($txt != ""){
		fwrite($myfile, "\n".$txt);
		fclose($myfile);
	}
	header('Location:memory3.html');
	?>
</body>
</html>