<?php
$num = 147;
$arr = [];
for ($i = 2; $i <= $num; $i++)
{
    if ($i % 2 !== 0 || $i === 2) {

        if ($num % $i === 0) {
            $arr[$i] = $arr[$i]++ ?? 1;
            $num = $num / $i;
        }
    }
}


print_r($arr);