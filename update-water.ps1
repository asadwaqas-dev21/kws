$files = Get-ChildItem -Path "public\Water Filtration Plant" -Filter "*.jpg" | Select-Object -ExpandProperty Name
$galleryArray = $files | ForEach-Object { "`"/Water Filtration Plant/$_`"" }
$galleryString = "/Hand Pumps/handpump.jpg`",`n      " + ($galleryArray -join ",`n      ")

$path = "app\services\data.ts"
$content = [System.IO.File]::ReadAllText($path)
$content = $content -replace '"/Hand Pumps/handpump\.jpg"', $galleryString
[System.IO.File]::WriteAllText($path, $content)
Write-Host "Updated data.ts with Water Filtration Plant gallery"
