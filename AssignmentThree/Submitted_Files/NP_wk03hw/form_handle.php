<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WEBD_166 | Thank You</title>
	<link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
	<?php include('includes/header.php'); ?>
	<div class="wrapper">
		<div class="container">

			<div class="form-wrapper text-center">
				<?php
					/*
					* Filename: NP_wk03hw.php
					* Book reference: Script 3.1
					* Created by: Nicholas Palomares
					*/
					$title = $_POST['title'];
					$fname = $_POST['fname'];
					$email = $_POST['email'];
					$response = $_POST['response'];
					$comments = $_POST['comments'];
		            
		            print "<h4>Thank you for your submission, <strong>$title $fname</strong>.</h4>";
		            print "<p>You found this survey to be: <strong>$response</strong>, and we thank you for your feedback.</p>";
		            print "<div class=\"well\"><h4>Your comments were:</h4><p><strong>$comments</strong></p></div>";
		            
				?>	
				<pre>
					<?php print_r($_POST); ?>				
				</pre>
				<div class="form-component">
					<a class="btn btn-primary" href="index.php">Back to the form page</a>
				</div>

		</div><!-- close container -->

	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>
