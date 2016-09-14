<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WEBD_166 | Feedback Form</title>
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
					* Filename: NP_wk03hw.php
					* Book reference: Script 3.1
					* Created by: Nicholas Palomares
					*/
		            
		            print '<h3 class="text-center">Please complete the form below</h3>';
		            
				?>					
				<form method="post" action="form_handle.php">
					<div class="form-component">
						<select name="title">
							<option value="Mr">Mr.</option>
							<option value="Mrs">Mrs.</option>
							<option value="Ms">Ms.</option>
						</select>
					</div>
					<div class="form-component">
						<label>Full Name: </label>
						<input type="text" class="fname" name="fname" required>
					</div>
					<div class="form-component">
						<label>Email: </label>
						<input type="email" class="email" name="email" required>
					</div>
					<div class="form-component">
						<label>Response:<br> This is... </label>
						<span class="rad-wrap"><input type="radio" name="response" value="Awesome" required>Awesome</span>
						<span class="rad-wrap"><input type="radio" name="response" value="Excellent">Excellent</span>
						<span class="rad-wrap"><input type="radio" name="response" value="Phenomenal">Phenomenal</span>
					</div>
					<div class="form-component">
						<label>Comments: </label>
						<textarea name="comments" rows="3" cols="30" class="comments" value="Enter your Feedback" required></textarea>
					</div>		
					<div class="form-component">
						<input type="submit" name="submit" class="btn btn-primary" value="Submit">
					</div>																
				</form>
			</div>

		</div><!-- close container -->

	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>
