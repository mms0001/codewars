<?php

namespace App\Tests;

use App\CheckLogs;
use PHPUnit\Framework\TestCase;

class CheckLogsTest extends TestCase {

    /**
     * @dataProvider sampleDataProvider
     */
    public function testCheckLogs($log, $expected)
    {
      $this->doTest($log, $expected);
    }

    private function doTest(array $log, int $expected)
    {
      $msg = 'Log=' . json_encode($log);

      $checkLogs = new CheckLogs();
      $this->assertSame($expected, $checkLogs->check($log), $msg);
    }


    public static function sampleDataProvider()
    {
      return [
        [['12:12:12'], 1],
        [['00:00:00', '00:01:11', '02:15:59', '23:59:58', '23:59:59'], 1],
        [['12:00:00', '23:59:59', '00:00:00'], 2],
        [['12:00:00', '12:00:00', '00:00:00'], 3],
      ];
    }

}