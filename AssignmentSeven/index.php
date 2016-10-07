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

			<div class="form-wrapper">
				<?php
					/*
					* Filename: NP_wk06hw.php
					* Created by: Nicholas Palomares
					* This file is going to post data to handle_reg.php using the POST method
					*/
		            		            
				?>		
				<fieldset>
					<legend>Please complete this form to register!</legend>

					<form method="post" action="handle_reg.php">
						<div class="form-component">
							<label>Email Address: </label>
							<input type="email" class="email" name="email" size="20" placeholder="Email Address" required>
						</div>						
						<div class="form-component">
							<label>Password: </label>
							<input type="password" class="password" name="password" size="20" placeholder="Password" required>
						</div>
						<div class="form-component">
							<label>Confirm Password: </label>
							<input type="password" class="password" name="confirm" size="20" placeholder="Confirm Password" required>
						</div>						
<!-- 						<div class="form-component">
							<label>Year You Were Born: </label>
							<input type="text" class="birthyear" name="birthyear" size="4" placeholder="YYYY" required>
						</div>	 -->
						<div class="form-component">
							<label>Year You Were Born: </label>
							<select name="month">
								<option value="">Month</option>
								<option value="1">January</option>
								<option value="2">February</option>
								<option value="3">March</option>
								<option value="4">April</option>
								<option value="5">May</option>
								<option value="6">June</option>
								<option value="7">July</option>
								<option value="8">August</option>
								<option value="9">September</option>
								<option value="10">October</option>
								<option value="11">November</option>
								<option value="12">December</option>																
							</select>

							<select name="day">
								<option value="">Day</option>
								<?php
									// let's loop through the days of the month
									for ($i=1; $i <= 31; $i++) { 
										print "<option value=\"$i\">$i</option>\n";
									}
								?>
							</select>

							<select name="year">
								<option value="">Year</option>
								<?php
									// let's loop through the years
									for ($i=1940; $i <= date('Y'); $i++) { 
										print "<option value=\"$i\">$i</option>\n";
									}
								?>
							</select>

						</div>							
						<div class="form-component">
							<label>Favorite Color: </label>
							<select name="color">
								<option value="">Pick One</option>
								<option value="red">Red</option>
								<option value="yellow">Yellow</option>
								<option value="green">Green</option>
								<option value="blue">Blue</option>
							</select>
						</div>
						<div class="form-component">
							<label><input type="checkbox" name="terms" class="terms" value="Yes">I agree to the terms.</label>
						</div>																					
						<div class="form-component">
							<input type="submit" name="submit" class="btn btn-primary" value="Register">
						</div>																
					</form>
				</fieldset>			
			</div>

		</div><!-- close container -->

	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>
