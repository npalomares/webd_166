<?php // Script 13.1 - mysqli_connect.php
/* This script connects to the database
and establishes the character set for communications. */

// Connect:
// $dbc = mysqli_connect('localhost', 'username', 'password', 'myquotes');
$dbc = mysqli_connect('localhost', 'root', '', 'webd166db');

//Set the character set:
mysqli_set_charset($dbc, 'utf8');