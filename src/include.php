<?php

define('HOME', realpath(dirname(__FILE__).'/../').'/');
define('SYS', HOME.'src/');

require_once SYS.'Twig/lib/Twig/Autoloader.php';
\Twig_Autoloader::register();

require_once SYS.'Todo/Autoloader.php';
\Todo\Autoloader::register();

require_once SYS.'ActiveRecords/ActiveRecord.php';

ActiveRecord\Config::initialize(function($cfg) {
    $settings = (object)include(SYS.'env.php');
    $cfg->set_connections(array('development' => 'mysql://'.$settings->db));
});
ActiveRecord\DateTime::$DEFAULT_FORMAT = 'long';

/**
 * Переменные для всех шаблонов
 */

\Todo\Template::v()->Author = isset($_COOKIE['username']) ? $_COOKIE['username'] : '';