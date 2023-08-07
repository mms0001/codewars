<?php

namespace App\Tests;

use App\DomainValidator;
use PHPUnit\Framework\TestCase;

class DomainValidatorTest extends TestCase {

    public function testValidator()
    {
      $domainValidator = new DomainValidator();
      
      $this->assertTrue($domainValidator->validate('codewars.com'));
      $this->assertTrue($domainValidator->validate('g.co'));
      $this->assertTrue($domainValidator->validate('CODEWARS.COM'));
      $this->assertTrue($domainValidator->validate('sub.codewars.com'));
      $this->assertFalse($domainValidator->validate('codewars'));
      $this->assertFalse($domainValidator->validate('codewars.com-'));
      $this->assertFalse($domainValidator->validate('.codewars.com'));
      $this->assertFalse($domainValidator->validate('example@codewars.com'));
      $this->assertFalse($domainValidator->validate('127.0.0.1'));
    }
}