$projectRoot = Split-Path -Parent $PSScriptRoot
$env:Path = "$projectRoot\.tools\node;$env:Path"
Set-Location $projectRoot
& .\.tools\node\npm.cmd run build
