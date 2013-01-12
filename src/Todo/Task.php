<?php

namespace Todo;

use ActiveRecord;

class Task extends ActiveRecord\Model {

    static $table_name = 'tasks';

}