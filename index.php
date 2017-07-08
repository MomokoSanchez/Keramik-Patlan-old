<!DOCTYPE HTML>
<html>
  <head>
	<?php
		include("header.php");
	?>
	<style type="text/css"> 
		.inmaininfo {
			padding-top: 80px;
			padding-left: 40px;
		}
	</style>
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-36947420-1']);
		_gaq.push(['_trackPageview']);

		(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script> 
  </head>
  <body>

    <div class="container">   
		<?php
			include("menu.php");
		?>
      
		<div class= "maininfo">
			<div class="inmaininfo">
				<img class="homeimg" src="images/main_1.jpg" alt="kerzenleuchter">
				<img class="homeimg" src="images/main_2.jpg" alt="tasse">
				<img class="homeimg" src="images/main_3.jpg" alt="krug">
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
