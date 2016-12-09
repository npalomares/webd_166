<?php 
/*********************************************************************************
Course:  WEBD166 - PHP

Created 2016: Larry Ullman (PHP for the Web - Fifth Edition)
Modified 2016-11-27 [David Taniguchi]: Modified for PDO Database Connection 

NOTE: Original "mysqli" code has been commented out for reference.
*********************************************************************************/
// Script 13.8 - view_favorites.php
/* This script lists all "favorite" quotes in HTML table format. */

// Include the header:
define('TITLE', 'View All Quotes');
include('templates/header.html');

print '<h2>Favorite Quotes (in table format)</h2>';

// Restrict access to administrators only:
if (!is_administrator()) {
	print '<h2>Access Denied!</h2><p class="error">You do not have permission to access this page.</p>';
	include('templates/footer.html');
	exit();
}

// Need the database connection:
//include('../mysqli_connect.php');
include('../PDO_connect.php');

// Define the query:
//$query = 'SELECT id, quote, source, favorite FROM quotes WHERE favorite = 1 ORDER BY date_entered DESC';
$stmt=$db->query('SELECT id, quote, source, favorite FROM quotes WHERE favorite = 1 ORDER BY date_entered DESC');

// Run the query:
/*
if ($result = mysqli_query($dbc, $query)) {

	// Retrieve the returned records:
	while ($row = mysqli_fetch_array($result)) {

		// Print the record:
		print "<div><blockquote>{$row['quote']}</blockquote>- {$row['source']}\n";

		// Is this a favorite?
		if ($row['favorite'] == 1) {
			print ' <strong>Favorite!</strong>';
		}

		// Add administrative links:
		print "<p><b>Quote Admin:</b> <a href=\"edit_quote.php?id={$row['id']}\">Edit</a> <->
		<a href=\"delete_quote.php?id={$row['id']}\">Delete</a></p></div>\n";

	} // End of while loop.

} else { // Query didn't run.
	print '<p class="error">Could not retrieve the data because:<br>' . mysqli_error($dbc) . '.</p><p>The query being run was: ' . $query . '</p>';
} // End of query IF.

*/

	print "<table id='tblFavorites'>\n";
	print "<tr><th style='width:5%'>ID</th><th style='width:60%'>Quote</th><th style='width:30%'>Source</th><th style='width:5%'>Favorite (1 or 0)</th></tr>";
	// Retrieve the returned records:
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
	// final: Loops and Arrays: "BEGIN foreach loop" for 2-dimensional $results array
	foreach($results as $row) {

		print "<tr>";

		// Print the record:
		// final: Loops and Arrays: Modify the next 4 print statements to display ID, Quote, Source and Favorite.
		print "<td>".$row[id]."</td>"; 
		print "<td>".$row[quote]."</td>";
		print "<td>".$row[source]."</td>"; 

		// Is this a favorite?
		print "<td>1 or 0</td>"; 
		
	
		print "</tr>";
	// final: Loops and Arrays: "END foreach loop" for 2-dimensional $results array
	}
	
	print "</table>";


// mysqli_close($dbc); // Close the connection.
$db = NULL; // Close the connection.

include('templates/footer.html'); // Include the footer.
?>