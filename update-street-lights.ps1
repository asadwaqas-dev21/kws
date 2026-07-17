$files = Get-ChildItem -Path "public\Street Lights" -Filter "*.jpg" | Select-Object -ExpandProperty Name
$galleryArray = $files | ForEach-Object { "`"/Street Lights/$_`"" }
$galleryString = "    gallery: [`n      " + ($galleryArray -join ",`n      ") + "`n    ],"

$path = "app\services\data.ts"
$content = [System.IO.File]::ReadAllText($path)
$content = $content -replace '(?s)(impact: "43\+ street lights now illuminate Khurram Hithar''s streets[^"]*"\s*,)(\s*)\},', "`$1`n$galleryString`$2},"
[System.IO.File]::WriteAllText($path, $content)
Write-Host "Updated data.ts with Street Lights gallery"
