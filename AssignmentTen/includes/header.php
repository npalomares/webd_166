<?php
	
	ob_start();

?>

<!doctype html>
<html lang="en">
<head>
	<title><?php 
			if(defined('TITLE')) {
				echo TITLE;
			} else {
				echo 'Raise High the Roof Beam! A J.D. Salinger Fan Club';
			} ?>
		</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/1.css" type="text/css" media="screen,projection">
</head>
<body>
<div id="wrapper">

<header>
	<p class="description">A J.D. Salinger Fan Club</p>
	<h1><a href="index.php">Raise High the Roof Beam!</a></h1>
	<nav>
      <ul id="nav">
		<li><a href="books.php">Books</a></li>
		<li><a href="#">Stories</a></li>
		<li><a href="#">Quotes</a></li>
		<li><a href="posting.php">Post</a></li>
		<li><a href="login.php">Login</a></li>
		<li><a href="register.php">Register</a></li>
	  </ul>
    </nav>
</header><!-- header -->