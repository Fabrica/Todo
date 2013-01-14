<?php

function getPutJson() {
    $s = fopen("php://input", "r");
    $a = '';
    while($kb = fread($s, 1024))
    {
        $a .= $kb;
    }
    fclose($s);
    return json_decode($a);
}

if ($_SERVER['REQUEST_METHOD'] == "PUT")
{
    $item = getPutJson();
    Header("HTTP/1.1 201 Created");
}

var_dump($item);