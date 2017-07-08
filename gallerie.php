<!DOCTYPE HTML>
<html>
  <head>
	<?php
		include("header.php");
	?>
	<style type="text/css">  
		.inmaininfo {
			padding-left: 20px;
			padding-top: 20px;
		} 
	</style>
  </head>
  <body>

    <div class="container">
		
		<?php
			include("menu.php");
		?>
		  
		<div class= "maininfo">
			<div class="inmaininfo">
				<div id="left">
					<a class="thumbnail" href="#thumb"><img src="images/galerie11.jpg" id="img11" /></a>
					<br />
					<a class="thumbnail" href="#thumb"><img src="images/galerie4.jpg" id="img4" /></a>
					<br />
					<a class="thumbnail" href="#thumb"><img src="images/galerie8.jpg" id="img8" /></a>
					<br />
					<a class="thumbnail" href="#thumb"><img src="images/galerie10.jpg" id="img10" /></a>					
				</div>
				<div id="center">
					<div id="row1">
						<a class="thumbnail" href="#thumb"><img class="one"/></a>
						<a class="thumbnail" href="#thumb"><img class="two"/></a>
					</div>
					
					<div id="row2">					
						<a class="thumbnail" href="#thumb"><img class="three"/></a>
						<a class="thumbnail" href="#thumb"><img class="four"/></a>
					</div>
				
					<div id="row3">
						<a class="thumbnail" href="#thumb"><img class="five"/></a>
						<a class="thumbnail" href="#thumb"><img class="six"/></a>
					</div>
					
					<div id="row4">
						<a class="thumbnail" href="#thumb"><img class="seven"/></a>
						<a class="thumbnail" href="#thumb"><img class="eight"/></a>
					</div>
				</div>
				<div id="right">
					<img class="hoch"/>
				</div>              
			</div>
		</div>
		  
		<?php
			include("footer.php");
		?>
    </div>
	
	<div class="impressum">
		<a href="impressum.php">Impressum</a>
	</div>
  </body>
</html>
