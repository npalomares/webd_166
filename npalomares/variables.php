<?php include('includes/header.php'); ?>

<body>
	<div class="wrapper">
        <div class="container">
		<p>The following was created by PHP:<br>

		<?php
			/*
			* Filename: variables.php
			* Book reference: Script 1.5
			* Created by: Nicholas Palomares
			*/
            
            // PHP goes here...
            $greeting = "Hi, my name is Nick!"; 
            $age = 35;
            $hair_color = "brown, kinda.";
            
		?>	
            <!-- Let's describe some things here -->
            <p><?php echo $greeting; ?></p>
            <p>I am <?php echo $age; ?> years of age.</p>
            <p>My hair color is, <?php echo $hair_color; ?>, serious.</p>                  
            <p>Here is server information</p>
            <pre>
                <?php echo $_SERVER['SERVER_NAME']; ?>
            </pre>
        </div>
	</div>
    
<?php include('includes/footer.php'); ?>
