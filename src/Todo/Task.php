<?php

namespace Todo;

use ActiveRecord;

class Task extends ActiveRecord\Model {

    static $table_name = 'tasks';

    static $primary_key = 'id';

    function getTime()
    {
        return $this->datetime->format();
    }

    /*
     * @return array
     */
    static function getProjects()
    {
        $array = array();
        foreach ( Task::find('all', array('select' => 'DISTINCT project', 'order' => 'project asc')) as $task ) {
            if ( $task->project != '' ) {
                $array[] = $task->project;
            }
        }
        return $array;
    }

}