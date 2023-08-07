<?php

namespace App;

class ObservedPin {

    public function getPINs($observed) {

        $mapsObservedNumberHorizontallyAndVertically  = [
            '1' => ['1', '2', '4'],
            '2' => ['1', '2', '3', '5'],
            '3' => ['2', '3', '6'],
            '4' => ['1', '4', '5', '7'],
            '5' => ['2', '4', '5', '8', '6'],
            '6' => ['3', '5', '6', '9'],
            '7' => ['4', '7', '8'],
            '8' => ['5', '7', '8', '0', '9'],
            '9' => ['6', '8', '9'],
            '0' => ['8', '0']
        ];
        $data = [];
        $digits = str_split($observed);
        if (count($digits) === 1) return $mapsObservedNumberHorizontallyAndVertically[$digits[0]];
        foreach($digits as $digit) {
            $combinations[] = $mapsObservedNumberHorizontallyAndVertically[$digit];
        }

        $lead = array_shift($combinations);
     
        foreach($lead as $l) {
            foreach($combinations as $combination) {
                dump($combination);
            }
        }

     
    
    }

}


require __DIR__ .'/../vendor/autoload.php';

$observed = new ObservedPin();
$observed->getPINs('123');