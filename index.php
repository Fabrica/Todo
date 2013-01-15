<?php

namespace Todo;

Template::temp('index');

$tasks = Task::find('all', array('order' => 'datetime desc'));
$projects = Task::getProjects();
Template::v()->projectsList = implode(',', $projects);

foreach ( $projects as $k => $project ) {
    $projects[$k] = new \stdClass();
    $projects[$k]->project = $project;
    $projects[$k]->tasks = array();
    foreach ( $tasks as $k1 => $v1 ) {
        if ( $v1->project == $project ) {
            $projects[$k]->tasks[] = $v1;
        }
    }
}
Template::v()->tasks = $tasks;
Template::v()->projects = $projects;

Template::render();