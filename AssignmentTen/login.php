<?php 

define('TITLE', 'Login');

include('includes/header.php');


echo '<h2>Login Form</h2>';
echo '<p>Users who are logged in can take advantage of this, that, and other things.</p>';

if($_SERVER['REQUEST_METHOD'] == 'POST') {

	// Handle the form
	if( (!empty($_POST['email']) ) && (!empty($_POST['password'])) ) {
		if( strtolower($_POST['email'] == 'me@example.com') && (trim($_POST['password']) == 'testpass') ) {

			// correct
			echo '<p>You are logged in!<br>
				  Now you can blah, blah, blah... </p>';
		} else { // incorrect
			echo '<p>The submitted email and password do not match those on file.<br>';
			echo '<a href="login.php">Go back and try again</a></p>';
		}
	} else { // forgot a field
		echo '<p>Please make sure you enter an email and a password.<br>';
		echo '<a href="login.php">Go back and try again</a></p>';
	}	
} else { // display the form

}	  

?>



<form method="post" action="login.php">
	<table>
		<tr class="form-component">
			<td><label>Email: </label></td>
			<td><input type="email" class="email" name="email" required></td>
		</tr>

		<tr class="form-component">
			<td><label>Password: </label></td>
			<td><input type="password" name="password" class="password" size="20" required></td>
		</tr>	
	</table>	
		<p><input type="submit" name="submit" class="btn btn-primary" value="Login"></p>
</form>