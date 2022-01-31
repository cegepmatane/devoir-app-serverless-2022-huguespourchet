<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$listeCadeauJson = file_get_contents("liste-cadeau.json");

if(strlen($listeCadeauJson) > 0){
  $listeCadeau = json_decode($listeCadeauJson);
  echo json_encode($listeCadeau);
}else{
  echo json_encode([]);
}