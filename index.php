<?php

namespace Todo;

use ActiveRecord;

Template::temp('index');

Template::v()->tasks = Task::find('all', array('order' => 'datetime desc'));
Template::v()->projects = Task::find('all', array('select' => 'DISTINCT project', 'order' => 'datetime desc'));

Template::render();