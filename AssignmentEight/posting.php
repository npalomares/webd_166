<?php 

define('TITLE', 'Posting');

include('includes/header.php');

	// Create variables from the form

	$fname = '';
	$lname  = '';
	$email  = '';
	$posting  = '';		
	$name = '';

	if(isset($_POST['submit'])) {
	    $fname = $_POST['fname'];
	    $lname = $_POST['lname'];
	    $email = trim($_POST['email']);
	    $posting = nl2br(strip_tags($_POST['posting']));
	    $output_form = false;

    if ($fname == empty($fname) && empty($lname)) {
        echo "{you} forgot you first and last names!!";
	        $output_form = true;
	    }

	    if (!empty($fname) && empty($lname)) {
	        echo "you forgot your last name . ";
	        $output_form = true;
	    }

	    if (empty($fname) && !empty($lname)) {
	        echo "you forgot your firstname . ";
	        $output_form = true;
	    }

	    if (!empty($fname) && !empty($lname)) {
	    	$name = $fname. ' '. $lname;
	        // print out a message
		    print "<div class=\"posting-wrapper\">";
		    print "<h3>Thank you $name, for posting.</h3>";
		    print "<p> $posting</p>";
	    }

	} // if isset submit

	else
	{
	    $output_form = true;
	}

	if ($output_form) {	    
	}	    	    			
	            
?>
	<div class="wrapper">
		<div class="container">

			<div class="form-wrapper">
	
				<fieldset>
					<legend>Please complete this form to submit your posting:</legend>

					<form method="post" action="posting.php">
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

