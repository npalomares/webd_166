<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WEBD_166 | Register</title>
	<link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
	<?php include('includes/header.php'); ?>
	<div class="wrapper">
		<div class="container">

			<div class="form-wrapper text-center">
				<?php
					// Script 6.2 - handle_reg.php
					/*
					 * 	This script will take the values from the form
					 */

					print "<div class=\"results-wrapper\">";

						$okay 		= true; 
						$email 		= trim($_POST['email']);
						$password 	= trim($_POST['password']);
						$confirm 	= trim($_POST['confirm']);	
						$month 		= $_POST['month'];
						$day 		= $_POST['day'];
						$year 		= $_POST['year'];
						$color		= $_POST['color'];

						// Validate the email address
						if (empty($email) ) {
							print "<p class=\"error\">Please enter your email address.</p>";	
							$okay = false;
						}

						// Validate the password
						if (empty($password) ) {
							print "<p class=\"error\">Please enter your password.</p>";	
							$okay = false;
						}	

						if ($password != $confirm) {
							print "<p class=\"error\">Your confirmed password does not match your original password .</p>";	
							$okay = false;
						}								

						// Validate the birth year
						if (is_numeric($year) AND strlen($year) == 4 ) {
							// Check that they were born before the current year
							if( $year >= date('Y') ) {
								$age = date('Y') - $year;
							}							
							// calculate age this year
						} else {
							print "<p class=\"error\">Either you entered your birth year wrong or you come from the future.</p>";	
							$okay = false;							
						}

						// Validate the color with a switch statement
						switch ($color) {
							case 'red':
							case 'yellow':
							case 'blue':
								$color_type = 'primary';
								break;
							case 'green':
								$color_type = 'secondary';
								break;
							default:
								print "<p class=\"error\">Please select your favorite color.</p>";								
								$okay = false;
								break;
						}

						// Check the terms checkbox has been checked
						if( !isset($_POST['terms']) ) {
							print "<p class=\"error\">You must accept the terms.</p>";	
							$okay = false;							
						}					 				

						// If there were no errors, print a success message:
						if ( $okay == true) {
							print $age;
			            	print "<h3>Thank you for registering! </h3>";
			            	//print '<p>Your age is ' .$age. '</p>';
			            	//print '<p>You were born on ' .$month $day $year. '</p>'
						}
		            	            		            
		            print "</div>";	// close results wrapper            

				?>
				<div class="form-component">
					<a class="btn btn-primary" href="index.php">Back to Form</a>
				</div>

		</div><!-- close container -->
	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>
