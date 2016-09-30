<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WEBD_166 | Thank You Page</title>
	<link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
	<?php include('includes/header.php'); ?>
	<div class="wrapper">
		<div class="container">
			

			<?php // Script 5.x - thanks.php
			/* This is the page the user sees after clicking on the link in handle_post.php (Script 5.5).
			This page is not formally developed in the book.
			This page receives name and email variables in the URL. */

			// Address error management, if you want.

			// Get the values from the $_GET array:
			$name = $_GET['name'];
			$email = $_GET['email'];

			// Print a message:
			print "<p>Thank you, $name. We will contact you at $email.</p>";

			?>
				<div class="form-component">
					<a class="btn btn-primary" href="index.php">Back to Posting</a>
				</div>			

		</div><!-- close container -->

	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>