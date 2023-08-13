<?php 

namespace App;

class CheckLogs {

    function check(array $logs): int {
        if (count($logs) > 1) {
            $days = 1;
            for($i = 0; $i < count($logs); $i++) {
                if(isset($logs[$i+1]) && ($logs[$i+1] <= $logs[$i])) $days += 1;
            }
            
            return $days;
        }

        return empty($logs) ? 0 : 1;
        
    }
}
