<?php


declare(strict_types=1);

namespace App;


class TwelveDays
{
    public function recite(int $start, int $end): string
    {
        $maps = [
            'first'    => 'a Partridge in a Pear Tree',
            'second'   => 'two Turtle Doves',
            'third'    => 'three French Hens',
            'fourth'   => 'four Calling Birds',
            'fifth'    => 'five Gold Rings',
            'sixth'    => 'six Geese-a-Laying',
            'seventh'  => 'seven Swans-a-Swimming',
            'eighth'   => 'eight Maids-a-Milking',
            'ninth'    => 'nine Ladies Dancing',
            'tenth'    => 'ten Lords-a-Leaping',
            'eleventh' => 'eleven Pipers Piping',
            'twelfth'  => 'twelve Drummers Drumming',
        ];

        $lyrics = [];
       
        foreach ($maps as $key => $value) {
            $arr[] = $value;
            $arr = array_reverse($arr);

            $last  = array_slice($arr, -1);
            $first = implode(', ', (array_slice($arr, 0, -1)));
            $both  = array_filter(array_merge([$first], $last), 'strlen');
           
            $lyrics[] = sprintf('On the %s day of Christmas my true love gave to me: %s.', $key, join(' and ', $both));
        }

        return implode(' ', array_slice($lyrics, $start-1, $end - $start +1));
    }
}