<?php

namespace Todo;

class Put
{

    public static function getPutJson() {
        $s = fopen("php://input", "r");
        $a = '';
        while($kb = fread($s, 1024))
        {
            $a .= $kb;
        }
        fclose($s);
        return json_decode($a, true);
    }

}