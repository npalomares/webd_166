<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WEBD_166 | Product Cost Calculator</title>
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
					* Filename: NP_wk04hw.php
					* Book reference: Script 4.1
					* Created by: Nicholas Palomares
					*/
		            
		            print '<h3 class="text-center">Fill out this form to find out the total cost</h3>';
		            
				?>					
				<form method="post" action="handle_calc.php">
					<div class="form-component">
						<label>* Price: </label>
						<input type="text" class="price" name="price" placeholder="$" required>						
					</div>
					<div class="form-component">
						<label>* Quanity: </label>
						<input type="text" class="quantity" name="quantity" required>
					</div>
					<div class="form-component">
						<label>* Discount: </label>
						<input type="text" class="discount" name="discount" placeholder="$" required>
					</div>
					<div class="form-component">
						<label>* Tax: (%)</label>
						<input type="text" class="tax" name="tax" required>
					</div>
					<div class="form-component">
						<label>* Shipping Method:</label>
						<select name="shipping" required>
							<option value="20.00">Like Today - $20</option>
							<option value="10.00">Tomorrow - $10</option>
							<option value="5.00">Someday Soon - $5</option>
						</select>
					</div>
					<div class="form-component">
						<label>* Number of Payments to Make:</label>
						<input type="text" class="payments" name="payments" size="5" required>
					</div>							
					<div class="form-component">
						<input type="submit" name="submit" class="btn btn-primary" value="Calculate">
					</div>																
				</form>
			</div>

		</div><!-- close container -->

	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>
