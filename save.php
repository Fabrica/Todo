<?php

namespace Todo;

if ( isset($_POST['text']) ) {
    $h = new History();
    $h->author = Template::v()->Author;
    if ( isset($_POST['id']) ) {
        $task = Task::find($_POST['id']);
        $h->before = $task->text;
        $h->doing = 'rename';
    }
    else {
        $task = new Task();
        $task->author = Template::v()->Author;
        if ( isset($_POST['author']) ) {
            $task->author = $_POST['author'];
        }
        $h->doing = 'create';
    }
    $task->text = $_POST['text'];
    $id = $task->save();
    if ( $id ) {
        $h->after = $task->text;
        $h->task_id = $task->id;
        $h->save();
    }
    die( json_encode(array('success'=>$id,'id'=>$task->id)));
}
elseif ( isset($_POST['id']) && isset($_POST['status']) ) {
    $task = Task::find($_POST['id']);
    $h = new History();
    $h->author = Template::v()->Author;
    $h->task_id = $task->id;
    $h->doing = 'change';
    $h->before = $task->status;
    $task->status = $_POST['status'];
    $id = $task->save();
    $h->after = $task->status;
    $h->save();
    die( json_encode(array('success'=>$id)));
}