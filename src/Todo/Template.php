<?php

namespace Todo;

class Template {

    /**
     * Параметры, которые выводятся в шаблоне
     * @var null|stdClass
     */
    public static $val = null;

    /**
     * @return stdClass
     */
    public static function v()
    {

        if ( self::$val == null ) {
            self::$val = new \stdClass();
        }

        return self::$val;

    }


    /**
     * Имя шаблона
     * @var string
     */
    public static $temp = false;
    public static function temp($template=false)
    {

        if ( self::$temp == false ) {
            self::$temp = $template;
        }

        if ( !self::$temp ) {
            throw new \Exception('Не указан шаблон!');
        }

        return self::$temp;

    }


    public static function render($template=false)
    {

        $loader = new \Twig_Loader_Filesystem(SYS.'Templates');
        $twig = new \Twig_Environment($loader, array( 'cache' => false )); //SYS.'Templates/_cache' ));

        $data = array();
        foreach ( Template::v() as $k => $v ) {
            $data[$k] = $v;
        }

        $twig->display(($template?$template:Template::temp()).'.html.twig', $data);

    }

}