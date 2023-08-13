<?php
namespace App;

class PartlistOfList {

    function partlist($arr) {
        $output = [];
        for ($i = 1; $i < count($arr); $i++) {
            $output[] = [
                implode(' ', array_slice($arr, 0, $i)),
                implode(' ', array_slice($arr, $i - count($arr)))
            ];  
        }

        return $output;
    }
}
