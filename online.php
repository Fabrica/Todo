<?php

require_once 'inc.php';

$list = Tasks::find(array('conditions' => 'datetime > "'.date('Y-m-d H:i:s', $_GET['time']/1000).'"' ));

if ( is_null($list) ) {
    exit;
}
echo htmlOneTask($list);