<?php

namespace Todo;

try {

    switch($_SERVER['REQUEST_METHOD']) {

        case 'PUT':
            $item = Put::getPutJson();
            $task = Task::find($item['id']);
            $task->status = $item['status'];
            $task->save();
            Header("HTTP/1.1 200 Ok");
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
            $item = Put::getPutJson();
            if ( isset($item['text']) ) {
                if ( !isset($item['project']) ) {
                    $item['project'] = 'Fabrica';
                }
                if ( !isset($item['author']) ) {
                    $item['author'] = 'ghost...';
                }
            }
            $save = new Task;
            $save->text = $item['text'];
            $save->author = $item['author'];
            $save->project = $item['project'];
            $save->datetime = date('Y-m-d H:i:s');
            $save->status = 'wait';
            $save->save();
            $out = $save->to_array();
            $out['datetime'] = $save->datetime->format('long');
            Header("HTTP/1.1 201 Created");
            echo json_encode($out);
            break;

        case 'DELETE':
            // TODO: Сделать API удаления
            var_dump($_POST,$_SERVER);
            break;
    }

}
catch( \Exception $e ) {
    Header("HTTP/1.1 500 Internal Server Error");
    echo $e->getMessage();
}
exit;