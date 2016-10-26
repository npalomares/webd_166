<?php 

define('TITLE', 'Register');

include('includes/header.php');


echo '<h2>Register Form</h2>';
echo '<p>Register so you can take advantage of this, that, and other things.</p>';

if($_SERVER['REQUEST_METHOD'] == 'POST') {

	$problem = false;

	if(empty($_POST['first_name']) ) {
		$problem = true;
		echo '<p class="error">Please enter your first name.</p>';
	}
	if(empty($_POST['last_name']) ) {
		$problem = true;
		echo '<p class="error">Please enter your last name.</p>';
	}	
	if(empty($_POST['email']) ) {
		$problem = true;
		echo '<p class="error">Please enter your email.</p>';
	}	
	if(empty($_POST['password']) ) {
		$problem = true;
		echo '<p class="error">Please enter your password.</p>';
	}	
	if($_POST['password'] != $_POST['confirm']) {
		$problem = true;
		echo '<p class="error">Please confirm your password.</p>';
	}		

	if( !$problem ) {
		echo 'You are now registered!<br>';

		$_POST = array();

	} else {
		echo '<p class="error">Please try again!.</p>';
	}
}

?>


<form method="post" action="register.php">
	<table>
		<tr>
			<td><label>First Name: </label></td>
			<td><input type="text" class="first_name" name="first_name"></td>
		</tr>

		<tr>
			<td><label>Last Name: </label></td>
			<td><input type="text" name="last_name" class="last_name" size="20"></td>
		</tr>			
		<tr>
			<td><label>Email: </label></td>
			<td><input type="email" class="email" name="email" required></td>
		</tr>

		<tr>
			<td><label>Password: </label></td>
			<td><input type="password" name="password" class="password" size="20" required></td>
		</tr>
		<tr>
			<td><label>Confirm Password: </label></td>
			<td><input type="password" name="confirm" class="confirm" size="20" required></td>
		</tr>			
	</table>	
		<p><input type="submit" name="submit" class="btn btn-primary" value="Register"></p>
</form>