<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$id = $_GET["id"];
$listePoutineJson = file_get_contents("liste-poutine.json");

if(strlen($listePoutineJson) > 0){
  $listePoutine = json_decode($listePoutineJson);
  foreach($listePoutine as $poutine) {
      if ($id == $poutine->id) {
          echo json_encode($poutine);
          die();
      }
  }
}
echo json_encode([]);

