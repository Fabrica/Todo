<?php

require_once 'ActiveRecord.php';

require_once 'xmpphp/send.php';

ActiveRecord\Config::initialize(function($cfg)
{
    $cfg->set_model_directory('.');
    $cfg->set_connections(array('development' => 'mysql://tasks:Rf7V8zU5vK38QL6P@localhost/tasks'));
});

class Tasks extends ActiveRecord\Model { }

class History extends ActiveRecord\Model {
    static $table_name = 'task_history';
}

function htmlOneTask($v) {
    $html = '<p class="oneDoIt'.($v->status=='ready'?' doing':'').'" data-taskid="'.$v->id.'"><label class="checkbox">
            <input type="checkbox"'.($v->status=='ready'?' checked="checked"':'').'> <span>'.$v->text.'</span>
        </label><a class="js-edit" href="#"><i class="icon-pencil"></i></a><br />
        <i>Добавил '.$v->author.' '.$v->datetime->format('d M Y в H:i').'</i></p>';
    return $html;
}