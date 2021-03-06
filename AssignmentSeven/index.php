<!doctype html>
<?php 

	error_reporting(0);

	// Constants
	define("TITLE", "mult-dimensional Arrays");

	// Custom Variables
	$my_name = "Nicholas Palomares";
	$lesson_title = "Fun with MD Arrays";
	$lesson_num = 8;

	// Multi dimensional array
	$moustaches = array (
		
		array (
			"name"		      => "John Waters",
			"creep_factor" 	  => "Extreme",
			"avg_growth_days"   => 1.5 		
		),

		array (
			"name" 			  => "twizzler",
			"creep_factor" 	  => "ultimate",
			"avg_growth_days"   => 5
		),
		array (
			"name" 			   => "skittle",
			"creep_factor" 	   => "gnar",
			"avg_growth_days"    => 45
		)
	);


	$soups1 = array (
		'Monday' 	=> 'Vegetable Soup',
		'Tuesday' 	=> 'Clam Chowder (White)',
		'Wednesday' => 'Chili'				
	);

	$soups2 = array (
		'Thursday' 	=> 'Potato',
		'Friday' 	=> 'Tomato',
		'Saturday' 	=> 'Lentil Soup'	
	);	

	// merge the two soup arrays
	$soups = array_merge($soups1, $soups2);
	//print_r($soups);
?>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WEBD_166 | <?php echo TITLE; ?></title>
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
=======
			<h2 class="page-title">Lesson Number: <?php echo $lesson_num. " | ". $lesson_title; ?></h2>

			<div class="well">
				<?php 
					echo "<p> Creep Factor: ".$moustaches[1]["creep_factor"]."</p>";					
				?>


				<!-- Let's try looping through these arrays -->
				<?php 
					foreach($moustaches as $key=> $value) {
					    if (!is_array($value))
					    {
					        echo $key ." => ". $value ."\r\n" ;
					    }
					    else
					    {
					       echo $key ." => array( \r\n";

					       foreach ($value as $key2 => $value2)
					       {
					           echo "\t". $key2 ." => ". $value2 ."\r\n";
					       }

					       echo ")";
					    }
					}
				?>
			</div>

			<div class="well">
				<h4>Loop through creepy moustaches</h4>
				<ul>
				<?php 
					foreach($moustaches as $key=> $value) {
						foreach($value as $item) {
							echo "<li>".$item."</li>";
						}
					}
				?>
				</ul>


				<ul>
				<?php 
					foreach($moustaches as $key=> $value) {
						foreach($value as $item) {
							echo "<li>".$key. "-->" .$item."</li>";
						}
					}
				?>
				</ul>				
			</div>	

			<div class="well">
				<h4>Merge two arrays of soups</h4>
				<?php print_r($soups); ?>
>>>>>>> 09a1f4e16ddb51d57bbac22898fc23bec77b6905
			</div>

		</div><!-- close container -->

	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>
