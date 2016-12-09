<?php
/*********************************************************************************
Course:  WEBD166 - PHP

Created 2016: Larry Ullman (PHP for the Web - Fifth Edition)
Modified 2016-11-27 [David Taniguchi]: Modified for PDO Database Connection 

*********************************************************************************/
try {
	/* final: Modify the database connector for your database */
	$db = new PDO('mysql:host=localhost;dbname=php_final;charset=utf8','php_np','Gfe5drTYV6pLwEeh');
	// var_dump($db); // Used for debugging
}
catch (Exception $e) {
	echo '<p>WEBD166: Database Error</p>';
}
?>