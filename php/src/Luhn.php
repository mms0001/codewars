<?php

declare(strict_types=1);

namespace App;


class Luhn {

    public function isValid(string $number): bool
    {
        $number = str_replace(" ", "", $number);
        if (!preg_match('/^[0-9]+$/', $number)) return false;
        if(strlen($number) === 1) return false;

        $arr = str_split($number);
        $str = '';
        for($i = 0; $i <= count($arr); $i++) {
            $str .=  $i%2 === 0 
                ? (($arr[$i] * 2) > 9 ? ($arr[$i] * 2) - 9 :  $arr[$i] * 2 )
                : $arr[$i];
        }
      
        var_dump($str);
        $sum = array_reduce(str_split($str), function($sum, $item){
            return $sum += $item;
        }, 0);
        var_dump($sum);

        //043 414 483
        
        //046 454 286
       
        return $sum % 10 === 0;
    }

}
