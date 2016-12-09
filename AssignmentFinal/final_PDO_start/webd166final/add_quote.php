<?php 
/*********************************************************************************
Course:  WEBD166 - PHP

Created 2016: Larry Ullman (PHP for the Web - Fifth Edition)
Modified 2016-11-27 [David Taniguchi]: Modified for PDO Database Connection 

NOTE: Original "mysqli" code has been commented out for reference.
*********************************************************************************/


// Define a page title and include the header:
define('TITLE', 'Add a Quote');
include('templates/header.html');

print '<h2>Add a Quotation</h2>';

// Restrict access to administrators only:
if (!is_administrator()) {
	print '<h2>Access Denied!</h2><p class="error">You do not have permission to access this page.</p>';
	include('templates/footer.html');
	exit();
}

// Check for a form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST') { // Handle the form.

	if ( !empty($_POST['quote']) && !empty($_POST['source']) ) {

		// Need the database connection:
		// include('../mysqli_connect.php'); // Orig mysqli
		include('../PDO_connect.php');

		// Prepare the values for storing:
		// $quote = mysqli_real_escape_string($dbc, trim(strip_tags($_POST['quote']))); // Orig mysqli
		// $source = mysqli_real_escape_string($dbc, trim(strip_tags($_POST['source']))); // Orig mysqli
		// final: Strings (2 of 2): Modify the quote to replace BADWORD with *******
		$quote = trim(strip_tags($_POST['quote']));
		$source = trim(strip_tags($_POST['source']));

		// Create the "favorite" value:
		if (isset($_POST['favorite'])) {
			$favorite = 1;
		} else {
			$favorite = 0;
		}

		$stmt = $db->prepare("INSERT INTO quotes (quote, source, favorite) VALUES (:quote, :source, :favorite)");
		$stmt->bindParam(':quote', $quote);
		$stmt->bindParam(':source', $source);
		$stmt->bindParam(':favorite', $favorite);

		// original mysqli code COMMENTED OUT
		/*
		$query = "INSERT INTO quotes (quote, source, favorite) VALUES ('$quote', '$source', $favorite)";
		mysqli_query($dbc, $query);

		if (mysqli_affected_rows($dbc) == 1){
			// Print a message:
			print '<p>Your quotation has been stored.</p>';
		} else {
			print '<p class="error">Could not store the quote because:<br>' . mysqli_error($dbc) . '.</p><p>The query being run was: ' . $query . '</p>';
		}
		*/
		if ($stmt->execute()){
			// Print a message:
			print '<p>Your quotation has been stored.</p>';
		} else {
			print '<p class="error">WEBD166: Insert Failed!</p>';
		}

		// Close the connection:
		//mysqli_close($dbc); // Orig mysqli
		$db = NULL;

	} else { // Failed to enter a quotation.
		print '<p class="error">Please enter a quotation and a source!</p>';
	}

} // End of submitted IF.

// Leave PHP and display the form:
?>

<form action="add_quote.php" method="post">
	<p><label>Quote <textarea name="quote" rows="5" cols="30"></textarea></label></p>
	<p><label>Source <input type="text" name="source"></label></p>
	<p><label>Is this a favorite? <input type="checkbox" name="favorite" value="yes"></label></p>
	<p><input type="submit" name="submit" value="Add This Quote!"></p>
</form>

<?php include('templates/footer.html'); ?>