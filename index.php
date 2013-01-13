<?php

namespace Todo;

use ActiveRecord;

Template::temp('index');

Template::v()->tasks = Task::all();

Template::render();