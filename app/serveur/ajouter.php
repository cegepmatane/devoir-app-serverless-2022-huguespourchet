<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$poutineJSON = file_get_contents('php://input');
$poutine= json_decode( $poutineJSON );
print_r($poutine);

$listePoutine = [];
$listePoutineJson = file_get_contents("liste-poutine.json");

if(strlen($listePoutineJson) > 0){
  $listePoutine = json_decode($listePoutineJson);
  $nombrePoutine = count($listePoutine);

  $poutine->id = $nombrePoutine;
  array_push($listePoutine, $poutine);
  print_r($listePoutine);
}

$listePoutineJson = json_encode($listePoutine);

/* Linux
sudo chgrp www-data liste-poutine.json
sudo chmod g+w liste-poutine.json
*/

file_put_contents("liste-poutine.json", $listePoutineJson);
