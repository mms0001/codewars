<?php

namespace App;

class VersionManager
{
    private  $major;
    private  $minor;
    private  $patch;
    private string $previousVersion;

    public function __construct(private ?string $version = '0.0.1')
    {
        $semver = explode('.', $version ?: '0.0.1');
        $this->major = $semver[0] ?? 0;
        $this->minor = $semver[1] ?? 0;
        $this->patch = $semver[2] ?? 0;
    
        
        if (!is_numeric($this->major) || !is_numeric($this->minor) || !is_numeric($this->patch)) {
            throw new \InvalidArgumentException("Error occured while parsing version!");
        }
    }

    public function release(): string
    {
      return sprintf('%s.%s.%s', $this->major, $this->minor, $this->patch);
    }

    public function rollback(): self|string
    {
        if (!isset($this->previousVersion) || empty($this->previousVersion)) {
            throw new \LogicException("Cannot rollback!");
        }
       
        return new Self($this->previousVersion);
    }

    public function major(): self
    {
        $this->previousVersion = $this->release();

        $this->major += 1;
        $this->minor = 0;
        $this->patch = 0;
        
        return $this;
    }

    public function minor(): self
    {
        $this->previousVersion = $this->release();

        $this->minor += 1;
        $this->patch = 0;
        return $this;
    }

    public function patch(): self
    {
        $this->previousVersion = $this->release();
        $this->patch += 1;
      
        return $this;
    }
}

