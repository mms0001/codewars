<?php 

namespace App;

class DomainValidator {

    public function validate($domain) {
        return preg_match('/^(?=.{1,253}$)(?!\-)(?:[a-z\d\-]{0,62}[a-z\d]\.){1,126}(?!(\-|\d+$|\-$))[a-z\d\-]{0,62}[a-z\d]$/i', $domain) ? true : false;
     }
}