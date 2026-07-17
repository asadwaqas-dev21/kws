$files = Get-ChildItem -Path "public\Madical camp" -Filter "*.jpg" | Select-Object -ExpandProperty Name
$galleryArray = $files | ForEach-Object { "`"/Madical camp/$_`"" }
$galleryString = "    gallery: [`n      " + ($galleryArray -join ",`n      ") + "`n    ],"

$path = "app\services\data.ts"
$content = [System.IO.File]::ReadAllText($path)
$content = $content -replace '(?s)(impact: "Over 1,000 patients have received free medical care[^"]*"\s*,)(\s*)\},', "`$1`n$galleryString`$2},"
[System.IO.File]::WriteAllText($path, $content)
Write-Host "Updated data.ts with Medical camp gallery (second attempt)"
