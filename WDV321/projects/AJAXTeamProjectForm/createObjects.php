<?php

$cupcakeObject->name = "Chocolate Cupcake";
$cupcakeObject->price = "$6.50/ea";
$cupcakeObject->img = "images/chocCupcake.jpg";
$cupcakeObject->desc = "This deliciously dark cupcake is a perfect dessert for the chocolate lovers, with a rich dark chocolate frosting and chocolate cake.";
$cupcakeObject->val = "choc";

$myJSON = json_encode($cupcakeObject);

$my_file = $cupcakeObject->val . ".json";
$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
	$data = $myJSON;
	fwrite($handle, $data);

	$cupcakeObject->name = "Vanilla Cupcake";
	$cupcakeObject->price = "$5.75/ea";
	$cupcakeObject->img = "images/vanCupcakes.jpg";
	$cupcakeObject->desc = "These vanilla cupcakes are supremely moist and flavorful with classic vanilla frosting, white cake and sprinkles on top.";
	$cupcakeObject->val = "van";

$myJSON = json_encode($cupcakeObject);

$my_file = $cupcakeObject->val . ".json";
$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
	$data = $myJSON;
	fwrite($handle, $data);

	$cupcakeObject->name = "Red Velvet Cupcake";
	$cupcakeObject->price = "$6.75/ea";
	$cupcakeObject->img = "images/redVelvetCupcake.jpg";
	$cupcakeObject->desc = "The best fluffy and moist red velvet cupcakes, topped with luscious cream cheese frosting and a delicious chocolate flavored cake bottom.";
	$cupcakeObject->val = "red";

$myJSON = json_encode($cupcakeObject);

$my_file = $cupcakeObject->val . ".json";
$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
	$data = $myJSON;
	fwrite($handle, $data);

	$candyObject->name = "Snickers";
	$candyObject->price = "$3.00/ea";
	$candyObject->img = "images/candySnickers.jpg";
	$candyObject->desc = "Nougat topped with caramel and peanuts, enrobed in milk chocolate.";
	$candyObject->val = "snick";

$myJSON = json_encode($candyObject);

$my_file = $candyObject->val . ".json";
$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
	$data = $myJSON;
	fwrite($handle, $data);

	$candyObject->name = "Twix";
	$candyObject->price = "$1.00/ea";
	$candyObject->img = "images/candyTwix.jpg";
	$candyObject->desc = "Delicious butter cookie center, topped with caramel, and coated with milk chocolate.";
	$candyObject->val = "twix";

$myJSON = json_encode($candyObject);

$my_file = $candyObject->val . ".json";
$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
	$data = $myJSON;
	fwrite($handle, $data);

	$candyObject->name = "Skittles";
	$candyObject->price = "$1.00/ea";
	$candyObject->img = "images/candySkittles.jpg";
	$candyObject->desc = "Chewy fruit flavored candy.";
	$candyObject->val = "skit";

$myJSON = json_encode($candyObject);

$my_file = $candyObject->val . ".json";
$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
	$data = $myJSON;
	fwrite($handle, $data);
?>