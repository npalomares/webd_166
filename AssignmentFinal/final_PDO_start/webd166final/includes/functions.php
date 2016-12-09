<?php 
/*********************************************************************************
Course:  WEBD166 - PHP

Created 2016: Larry Ullman (PHP for the Web - Fifth Edition)
Modified 2016-11-27 [David Taniguchi]: Added comments for $name variable
Modified 2016-12-01 [Nicholas Palomares]: Added a date function and a variable of name
*********************************************************************************/
// Script 13.2 - functions.php
/* This page defines custom functions. */

// This function checks if the user is an administrator.
// This function takes two optional values.
// This function returns a Boolean value.
function is_administrator($name = 'Samuel', $value = 'Clemens') {

	// Check for the cookie and check its value:
	if (isset($_COOKIE[$name]) && ($_COOKIE[$name] == $value)) {
		return true;
	} else {
		return false;
	}

} // End of is_administrator() function.

// final: Variables (1 of 2): Create $name variable and set it to your full name
// e.g.  $myvariable = 'My String Value';
$year = date('Y'); 
$name = "Nicholas Palomares";
$date = date('F, m, Y');
$time = date("h:i:sa");

// Use the variable in footer.html