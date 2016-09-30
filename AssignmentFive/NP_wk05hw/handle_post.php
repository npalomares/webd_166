<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WEBD_166 | Posting</title>
	<link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
	<?php include('includes/header.php'); ?>
	<div class="wrapper">
		<div class="container">

			<div class="form-wrapper text-center">
				<?php
					// Script 5.5 - handle_post.php
					/*
					 * 	This script will take the values from the form
					 */

					// Create variables from the form
					$fname = trim($_POST['fname']);
					$lname = trim($_POST['lname']);
					$email = $_POST['email'];
					$posting = nl2br(strip_tags($_POST['posting']));

					$name = $fname. '' .$lname;

					//Adjust for HTML tags
					$html_post = htmlentities($_POST['posting']);
					$strip_post = strip_tags($_POST['posting']);
		            
		            // print out a message
		            print "<div class=\"results-wrapper\">";
		            print "<h3>Thank you $name, for posting.</h3>";
		            print "<p><strong>Original: </strong> $posting</p>";
		            print "<p><strong>Entity: </strong> $html_post</p>";
		            print "<p><strong>Stripped: </strong> $strip_post</p>";		            		            
		            print "</div>";
		            
		            // Let's get a word count
		            $word_count = str_word_count($posting);

		            // Get a snippet of the posting:
		            $posting = substr($posting, 0, 50);

		            // Eliminate "badword" in submitted textarea field
		            $posting = str_ireplace('badword', 'XXXXXX', $posting);

		            // Print another message
		            print "<div class=\"results-wrapper\">";
		            print "<h3>Thank you $name, for posting.</h3>";
		            print "<p>$posting...</p>";
		            print "<p>($word_count words)</p>";		            		            
		            print "</div>";		            

		            // urlencode changes the format of a string
		            // so it can properly be passed as part of a URL
		            $name = urldecode($name);
		            $email = urldecode($_POST['email']);

		            print '<p>Click <a href="thanks.php?name='.$name.'&email='.$email.'">here</a> to continue.</p>';		            
				?>	
				<pre>
					<?php print_r($_POST); ?>				
				</pre>
				<div class="form-component">
					<a class="btn btn-primary" href="index.php">Back to Posting</a>
				</div>

		</div><!-- close container -->
	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>
