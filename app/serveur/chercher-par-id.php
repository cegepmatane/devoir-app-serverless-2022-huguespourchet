<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$id = $_GET["id"];
$listeCadeauJson = file_get_contents("liste-cadeau.json");

if(strlen($listeCadeauJson) > 0){
  $listeCadeau = json_decode($listeCadeauJson);
  foreach($listeCadeau as $cadeau) {
      if ($id == $cadeau->id) {
          echo json_encode($cadeau);
          die();
      }
  }
}
echo json_encode([]);

