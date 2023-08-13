<?php

namespace App\Tests;
use App\PartlistOfList;
use PHPUnit\Framework\TestCase;

class PartlistOfListTest extends TestCase {

    public function testPartlistOfList() {
        $partlistOfList = new PartlistOfList();

        $this->assertEquals($partlistOfList->partlist(["I", "wish", "I", "hadn't", "come"]),
        [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]);
        $this->assertEquals($partlistOfList->partlist(["cdIw", "tzIy", "xDu", "rThG"]), 
        [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]);
        $this->assertEquals($partlistOfList->partlist(["vJQ", "anj", "mQDq", "sOZ"]), 
        [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]);
    }
}

