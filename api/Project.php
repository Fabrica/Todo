<?php

namespace Todo;

switch($_SERVER['REQUEST_METHOD']) {

    case 'PUT':
        $item = Put::getPutJson();
        Header("HTTP/1.1 201 Created");
        break;

    case 'GET':
        $projects = Task::find('all', array('select' => 'DISTINCT project', 'order' => 'project asc'));
        $list = array();
        foreach ( $projects as $project ) {
            if ( $project->project != '' ) {
                $list[] = $project->to_array();
            }
        }
        echo json_encode($list);
        break;

    case 'POST':
        var_dump($_POST,$_SERVER);
        break;

    case 'DELETE':
        var_dump($_POST,$_SERVER);
        break;
}