<?php

require_once 'inc.php';

$user = isset($_COOKIE['username']) ? $_COOKIE['username'] : 'Robot';

if ( isset($_POST['text']) ) {
    $h = new History();
    $h->author = $user;
    if ( isset($_POST['id']) ) {
        $task = Tasks::find($_POST['id']);
        $h->before = $task->text;
        $h->doing = 'rename';
    }
    else {
        $task = new Tasks();
        $task->author = $user;
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
//	$a = shell_exec('python --version');///home/joshuan/scripts/jabber_send.py joshuan.chel@gmail.com "Задача №'.$task->id.'. '.$task->text.'. Автор: '.$task->author.'"');
//	var_dump($a);
    }
    die( json_encode(array('success'=>$id,'id'=>$task->id)));
}
elseif ( isset($_POST['id']) && isset($_POST['status']) ) {
    $task = Tasks::find($_POST['id']);
    $h = new History();
    $h->author = $user;
    $h->task_id = $task->id;
    $h->doing = 'change';
    $h->before = $task->status;
    $task->status = $_POST['status'];
    $id = $task->save();
    $h->after = $task->status;
    $h->save();
    die( json_encode(array('success'=>$id)));
}