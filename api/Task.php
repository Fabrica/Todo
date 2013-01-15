<?php

namespace Todo;

switch($_SERVER['REQUEST_METHOD']) {

    case 'PUT':
        $item = Put::getPutJson();
        $task = Task::find($item->id);
        $task->status = $item->status;
        $task->save();
        Header("HTTP/1.1 201 Created");
        break;

    case 'GET':
        $list = Task::find('all', array('order' => 'datetime asc'));
        foreach ( $list as $k => $task ) {
            $list[$k] = $task->to_array();
            $list[$k]['datetime'] = $task->datetime->format('long');
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