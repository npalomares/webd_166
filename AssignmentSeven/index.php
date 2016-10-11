<!doctype html>
<?php 

	error_reporting(0);

	// Constants
	define("TITLE", "mult-dimensional Arrays");

	// Custom Variables
	$my_name = "Nicholas Palomares";
	$lesson_title = "Fun with MD Arrays";
	$lesson_num = 8;

	// Multi dimensional array
	$moustaches = array (
		
		array (
			"name"		      => "John Waters",
			"creep_factor" 	  => "Extreme",
			"avg_growth_days"   => 1.5 		
		),

		array (
			"name" 			  => "twizzler",
			"creep_factor" 	  => "ultimate",
			"avg_growth_days"   => 5
		),
		array (
			"name" 			   => "skittle",
			"creep_factor" 	   => "gnar",
			"avg_growth_days"    => 45
		)
	);


	$soups1 = array (
		'Monday' 	=> 'Vegetable Soup',
		'Tuesday' 	=> 'Clam Chowder (White)',
		'Wednesday' => 'Chili'				
	);

	$soups2 = array (
		'Thursday' 	=> 'Potato',
		'Friday' 	=> 'Tomato',
		'Saturday' 	=> 'Lentil Soup'	
	);	

	// merge the two soup arrays
	$soups = array_merge($soups1, $soups2);
	//print_r($soups);
?>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WEBD_166 | <?php echo TITLE; ?></title>
	<link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
	<?php include('includes/header.php'); ?>
	<div class="wrapper">
		<div class="container">
			<h2 class="page-title">Lesson Number: <?php echo $lesson_num. " | ". $lesson_title; ?></h2>

			<div class="well">
				<?php 
					echo "<p> Creep Factor: ".$moustaches[1]["creep_factor"]."</p>";					
				?>


				<!-- Let's try looping through these arrays -->
				<?php 
					foreach($moustaches as $key=> $value) {
					    if (!is_array($value))
					    {
					        echo $key ." => ". $value ."\r\n" ;
					    }
					    else
					    {
					       echo $key ." => array( \r\n";

					       foreach ($value as $key2 => $value2)
					       {
					           echo "\t". $key2 ." => ". $value2 ."\r\n";
					       }

					       echo ")";
					    }
					}
				?>
			</div>

			<div class="well">
				<h4>Loop through creepy moustaches</h4>
				<ul>
				<?php 
					foreach($moustaches as $key=> $value) {
						foreach($value as $item) {
							echo "<li>".$item."</li>";
						}
					}
				?>
				</ul>


				<ul>
				<?php 
					foreach($moustaches as $key=> $value) {
						foreach($value as $item) {
							echo "<li>".$key. "-->" .$item."</li>";
						}
					}
				?>
				</ul>				
			</div>	

			<div class="well">
				<h4>Merge two arrays of soups</h4>
				<?php print_r($soups); ?>
			</div>

		</div><!-- close container -->

	</div><!-- close wrapper -->
	<?php include('includes/footer.php'); ?>
</body>
</html>
