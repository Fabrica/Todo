<?php

namespace Todo;

use ActiveRecord;

class Task extends ActiveRecord\Model {

    static $table_name = 'tasks';

    function getTime() {
        return $this->datetime->format();
    }

}