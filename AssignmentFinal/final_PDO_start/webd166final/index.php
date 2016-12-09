<?php 
/*********************************************************************************
Course:  WEBD166 - PHP

Created 2016: Larry Ullman (PHP for the Web - Fifth Edition)
Modified 2016-11-27 [David Taniguchi]: Modified for PDO Database Connection 

NOTE: Original "mysqli" code has been commented out for reference.
*********************************************************************************/
// Script 13.11 - index.php
/* This is the home page for this site. It displays:
- The most recent quote (default)
- OR, a random quote
- OR, a random favorite quote */

// final: Cookie: Set a Cookie called "webd166" with the value of "<your first name> WAS HERE!" as the value. Set expiration to 1hr = 3600 seconds.
// Test it with your browsers developer tools OR write debug code.
setcookie('webd166', 'Nicholas Palomares', 60*60);
// Include the header:
include('templates/header.html');

// Need the database connection:
//include('../mysqli_connect.php');
include('../PDO_connect.php');

// Define the query...
// Change the particulars depending upon values passed in the URL:
if (isset($_GET['random'])) {
//	$query = 'SELECT id, quote, source, favorite FROM quotes ORDER BY RAND() DESC LIMIT 1';
	$stmt = $db->query("SELECT id, quote, source, favorite FROM quotes ORDER BY RAND() DESC LIMIT 1");
} elseif (isset($_GET['favorite'])) {
//	$query = 'SELECT id, quote, source, favorite FROM quotes WHERE favorite=1 ORDER BY RAND() DESC LIMIT 1';
	$stmt = $db->query("SELECT id, quote, source, favorite FROM quotes WHERE favorite=1 ORDER BY RAND() DESC LIMIT 1");
} else {
//	$query = 'SELECT id, quote, source, favorite FROM quotes ORDER BY date_entered DESC LIMIT 1';
	$stmt = $db->query("SELECT id, quote, source, favorite FROM quotes ORDER BY date_entered DESC LIMIT 1");
}

// Run the query:
//if ($result = mysqli_query($dbc, $query)) {
if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

	// Retrieve the returned record:
	//$row = mysqli_fetch_array($result);

	// Print the record:
	print "<div><blockquote>{$row['quote']}</blockquote>- {$row['source']}";

	// Is this a favorite?
	if ($row['favorite'] == 1) {
		print ' <strong>Favorite!</strong>';
	}

	// Complete the DIV:
	print '</div>';

	// If the admin is logged in, display admin links for this record:
	if (is_administrator()) {
		print "<p><b>Quote Admin:</b> <a href=\"edit_quote.php?id={$row['id']}\">Edit</a> <->
		<a href=\"delete_quote.php?id={$row['id']}\">Delete</a>
		</p>\n";
	}

} else { // Query didn't run.
	//print '<p class="error">Could not retrieve the data because:<br>' . mysqli_error($dbc) . '.</p><p>The query being run was: ' . $query . '</p>';
	print '<p class="error">WEBD166: Query did not run</p>';
} // End of query IF.

//mysqli_close($dbc); // Close the connection.
$db = NULL; // Close the connection.

print '<p><a href="index.php">Latest</a> <-> <a href="index.php?random=true">Random</a> <-> <a href="index.php?favorite=true">Favorite</a></p>';

include('templates/footer.html'); // Include the footer.
?>