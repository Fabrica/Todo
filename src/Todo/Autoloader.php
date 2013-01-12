<?php

namespace Todo;

class Autoloader
{

    public static function register()
    {
        spl_autoload_register(array(new self, 'autoload'));
    }


    public static function autoload($class)
    {
        if (0 !== strpos($class, 'Todo\\')) {
            return;
        }

        if (is_file($file = SYS.str_replace(array('\\', "\0"), array('/', ''), $class).'.php')) {
            require_once $file;
        }
    }
}