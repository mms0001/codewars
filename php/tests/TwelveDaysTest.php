<?php

namespace App\Tests;

use App\TwelveDays;
use PHPUnit\Framework\TestCase;

class TwelveDaysTest  extends TestCase {

    private TwelveDays $twelveDays;

    public function setUp(): void
    {
        $this->twelveDays = new TwelveDays();
    }



    public function testSecondDayTwoTurtleDoves(): void
    {


        $expected =
            "On the second day of Christmas my true love gave to me: two Turtle Doves, " .
            "and a Partridge in a Pear Tree.";
        $this->assertEquals($expected, $this->twelveDays->recite(3, 3));
        //$this->twelveDays->recite(2, 2);
    }
}