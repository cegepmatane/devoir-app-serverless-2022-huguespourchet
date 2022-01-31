<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$cadeauJSON = file_get_contents('php://input');
$cadeau= json_decode( $cadeauJSON );
print_r($cadeau);

$listeCadeau = [];
$listeCadeauJson = file_get_contents("liste-cadeau.json");

if(strlen($listeCadeauJson) > 0){
  $listeCadeau = json_decode($listeCadeauJson);
  $nombreCadeau = count($listeCadeau);

  $cadeau->id = $nombreCadeau;
  array_push($listeCadeau, $cadeau);
  print_r($listeCadeau);
}

$listeCadeauJson = json_encode($listeCadeau);

/* Linux
sudo chgrp www-data liste-cadeau.json
sudo chmod g+w liste-cadeau.json
*/

file_put_contents("liste-cadeau.json", $listeCadeauJson);
