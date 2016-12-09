<?php 
/*********************************************************************************
Course:  WEBD166 - PHP

Created 2016: Larry Ullman (PHP for the Web - Fifth Edition)
Modified 2016-11-27 [David Taniguchi]: Modified for PDO Database Connection 

NOTE: Original "mysqli" code has been commented out for reference.
*********************************************************************************/
// Script 13.9 - edit_quote.php
/* This script edits a quote. */

// Define a page title and include the header:
define('TITLE', 'Edit a Quote');
include('templates/header.html');

print '<h2>Edit a Quotation</h2>';

// Restrict access to administrators only:
if (!is_administrator()) {
	print '<h2>Access Denied!</h2><p class="error">You do not have permission to access this page.</p>';
	include('templates/footer.html');
	exit();
}

// Need the database connection:
// include('../mysqli_connect.php');
include('../PDO_connect.php');

if (isset($_GET['id']) && is_numeric($_GET['id']) && ($_GET['id'] > 0) ) { // Display the entry in a form:

	// Define the query.
	//$query = "SELECT quote, source, favorite FROM quotes WHERE id={$_GET['id']}";
	$stmt = $db->query("SELECT quote, source, favorite FROM quotes WHERE id={$_GET['id']}");
	/*
	if ($result = mysqli_query($dbc, $query)) { // Run the query.

		$row = mysqli_fetch_array($result); // Retrieve the information.

		// Make the form:
		print '<form action="edit_quote.php" method="post">
			<p><label>Quote <textarea name="quote" rows="5" cols="30">' . htmlentities($row['quote']) . '</textarea></label></p>
			<p><label>Source <input type="text" name="source"value="' . htmlentities($row['source']) . '"></label></p>
			<p><label>Is this a favorite? <input type="checkbox" name="favorite" value="yes"';

		// Check the box if it is a favorite:
		if ($row['favorite'] == 1) {
			print ' checked="checked"';
		}

		// Complete the form:
		print '></label></p>
			<input type="hidden" name="id" value="' . $_GET['id'] . '">
			<p><input type="submit" name="submit" value="Update This Quote!"></p>
	</form>';

	} else { // Couldn't get the information.
		print '<p class="error">Could not retrieve the quotation because:<br>' . mysqli_error($dbc) . '.</p><p>The query being run was: ' . $query . '</p>';
	}
	*/
	if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {


		// Make the form:
		print '<form action="edit_quote.php" method="post">
			<p><label>Quote <textarea name="quote" rows="5" cols="30">' . htmlentities($row['quote']) . '</textarea></label></p>
			<p><label>Source <input type="text" name="source"value="' . htmlentities($row['source']) . '"></label></p>
			<p><label>Is this a favorite? <input type="checkbox" name="favorite" value="yes"';

		// Check the box if it is a favorite:
		if ($row['favorite'] == 1) {
			print ' checked="checked"';
		}

		// Complete the form:
		print '></label></p>
			<input type="hidden" name="id" value="' . $_GET['id'] . '">
			<p><input type="submit" name="submit" value="Update This Quote!"></p>
	</form>';

	} else { // Couldn't get the information.
		print '<p class="error">WEBD166: No Information Found</p>';
	}

} elseif (isset($_POST['id']) && is_numeric($_POST['id']) && ($_POST['id'] > 0)) { // Handle the form.

	// Validate and secure the form data:
	$problem = FALSE;
	if ( !empty($_POST['quote']) && !empty($_POST['source']) ) {

		// Prepare the values for storing:
		//$quote = mysqli_real_escape_string($dbc, trim(strip_tags($_POST['quote'])));
		//$source = mysqli_real_escape_string($dbc, trim(strip_tags($_POST['source'])));
		$id=$_POST['id'];
		// final: Strings (1 of 2): Modify the quote to replace BADWORD with *******
		$quote = trim(strip_tags($_POST['quote']));
		$source = trim(strip_tags($_POST['source']));


		// Create the "favorite" value:
		if (isset($_POST['favorite'])) {
			$favorite = 1;
		} else {
			$favorite = 0;
		}

	} else {
		print '<p class="error">Please submit both a quotation and a source.</p>';
		$problem = TRUE;
	}

	if (!$problem) {

		// Define the query.
		// $query = "UPDATE quotes SET quote='$quote', source='$source', favorite=$favorite WHERE id={$_POST['id']}";
		$stmt = $db->prepare("UPDATE quotes SET quote=:quote, source=:source, favorite=:favorite WHERE id=:id");
		$stmt->bindParam(':quote', $quote);
		$stmt->bindParam(':source', $source);
		$stmt->bindParam(':favorite', $favorite);
		$stmt->bindParam(':id', $id);
		
		
		/*
		if ($result = mysqli_query($dbc, $query)) {
			print '<p>The quotation has been updated.</p>';
		} else {
			print '<p class="error">Could not update the quotation because:<br>' . mysqli_error($dbc) . '.</p><p>The query being run was: ' . $query . '</p>';
		}
		*/
		if ($stmt->execute()) {
			print '<p>The quotation has been updated.</p>';
		} else {
			print '<p class="error">WEBD166: Update Failes</p>';
			//print '<p class="error">Could not update the quotation because:<br>' . mysqli_error($dbc) . '.</p><p>The query being run was: ' . $query . '</p>';
		}

	} // No problem!

} else { // No ID set.
	print '<p class="error">This page has been accessed in error.</p>';
} // End of main IF.

// mysqli_close($dbc); // Close the connection.
$db = NULL; // Close the connection.

include('templates/footer.html'); // Include the footer.
?>