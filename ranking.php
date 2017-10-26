<html>
<head>
</head>
<body>
	<?php
	$myfile = fopen("scoreboard.txt", "a") or die("Unable to open file!");
	$txt = $_POST['textoranking'];
	fwrite($myfile, "\n".$txt);
	fclose($myfile);
	?>
</body>
</html>