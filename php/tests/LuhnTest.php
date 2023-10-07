<?php
namespace App\Tests;

use App\Luhn;
use PHPUnit\Framework\TestCase;

class LuhnTest extends TestCase
{
    /**@var Luhn $luhn*/
    private Luhn $luhn;

    public function setUp(): void
    {
        $this->luhn = new Luhn();
    }

    public function testSingleDigitInvalid(): void
    {
        $this->assertFalse($this->luhn->isValid("1"));
    }

    public function testSingleZeroInvalid(): void
    {
        $this->assertFalse($this->luhn->isValid("0"));
    }

    public function testSimpleValidNumber(): void
    {
        $this->assertTrue($this->luhn->isValid("59"));
    }

    public function testSpaceHandling(): void
    {
        $this->assertTrue($this->luhn->isValid(" 5 9 "));
    }

    public function testValidCanadianSocialInsuranceNumber(): void
    {
        $this->assertTrue($this->luhn->isValid("046 454 286"));
    }

    public function testInvalidCanadianSocialInsuranceNumber(): void
    {
        $this->assertFalse($this->luhn->isValid("046454287"));
    }

    public function testInvalidCreditCard(): void
    {
        $this->assertFalse($this->luhn->isValid("8273 1232 7352 0569"));
    }

    public function testNonDigitCharacterInValidStringInvalidatesTheString(): void
    {
        $this->assertFalse($this->luhn->isValid("046a 454 286"));
    }

    public function testThatStringContainingSymbolsIsInvalid(): void
    {
        $this->assertFalse($this->luhn->isValid("055£ 444$ 285"));
    }

    public function testThatStringContainingPunctuationIsInvalid(): void
    {
        $this->assertFalse($this->luhn->isValid("055-444-285"));
    }

    public function testSpaceAndSingleZeroIsInvalid(): void
    {
        $this->assertFalse($this->luhn->isValid(" 0"));
    }

    public function testMultipleZerosIsValid(): void
    {
        $this->assertTrue($this->luhn->isValid(" 00000"));
    }

    public function testThatDoublingNineIsHandledCorrectly(): void
    {
        $this->assertTrue($this->luhn->isValid("091"));
    }

    public function testThatStringContainingSymbolsWhichCouldBeZeroIsInvalid(): void
    {
        $this->assertFalse($this->luhn->isValid(" ABCDEF"));
    }
}
