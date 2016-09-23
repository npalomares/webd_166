<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WEBD_166 | Calculations</title>
	<link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
	<?php include('includes/header.php'); ?>
	<div class="wrapper">
		<div class="container">

			<div class="form-wrapper text-center">
				<?php
					// Script 4.2 - handle_calc.php
					/*
					 * 	This script will take the values from the form
					 *	in calculations.php and do math!!
					 */

					// Create variables from the form
					$price = $_POST['price'];
					$quantity = $_POST['quantity'];
					$discount = $_POST['discount'];
					$tax = $_POST['tax'];
					$shipping_cost = $_POST['shipping'];
					$payments = $_POST['payments'];

					// This is where I will handle the calculations
					$subtotal = ($quantity * $price) + $shipping_cost;
					$tax_amount = $subtotal * ($tax/100);
					$tax_amount = round($tax_amount, 2);
					$total = $subtotal + round($tax_amount, 2) - $discount;
					$bill = $total / $payments;
		            $bill = round($bill, 2);
		            
		            // print out the results
		            print "<div class=\"results-wrapper\">";
		            print "<h3>You have decided to purchase:</h3>";
		            print "<strong>$quantity</strong> item(s) at</p>";
		            print "<strong>$$price</strong> price each, plus a</p>";
		            print "<strong>$$shipping_cost</strong> shipping cost at a</p>";
		            print "<strong>$tax %</strong> tax rate. <strong>($$tax_amount)</strong></p>";
		            print "After a <strong>$$discount</strong> discount, your total cost is <strong>$$total</strong>.</p>";
		            print "Divided over <strong>$payments</strong> payments, that would be <strong>$$bill</strong> each.</p>";
		            print "</div>";
		            
				?>	
				<pre>
					<?php //print_r($_POST); ?>				
				</pre>
				<div class="form-component">
					<a class="btn btn-primary" href="index.php">Back to Calculations</a>
				</div>

		</div><!-- close container -->
	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>
