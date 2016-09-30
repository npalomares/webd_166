<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WEBD_166 | Forum Posting</title>
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
					* Filename: NP_wk05hw.php
					* Book reference: Script 5.1
					* Created by: Nicholas Palomares
					* This file is going to post data to handle_post.php using the POST method
					*/
		            		            
				?>		
				<fieldset>
					<legend>Please complete this form to submit your posting:</legend>

					<form method="post" action="handle_post.php">
						<div class="form-component">
							<label>First Name: </label>
							<input type="text" class="fname" name="fname" size="20" placeholder="First Name" required>						
						</div>
						<div class="form-component">
							<label>Last Name: </label>
							<input type="text" class="lname" name="lname" size="20" placeholder="Last Name" required>
						</div>
						<div class="form-component">
							<label>Email Address: </label>
							<input type="email" class="email" name="email" size="20" placeholder="Email Address" required>
						</div>						
						<div class="form-component">
							<label>Posting: </label>
							<textarea class="posting" name="posting" placeholder="Post here" rows="9" cols="30" required></textarea>
						</div>
						
						<div class="form-component">
							<input type="submit" name="submit" class="btn btn-primary" value="Send My Posting">
						</div>																
					</form>
				</fieldset>			
			</div>

		</div><!-- close container -->

	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>
