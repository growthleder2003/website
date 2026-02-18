
# Script to push to GitHub
# Run this in PowerShell

$username = "hurehman688-crypto"
$repo = "haseeb-services-website"
$token = "YOUR_TOKEN_HERE" 

# Build remote URL
$remoteUrl = "https://$($username):$($token)@github.com/$username/$repo.git"

Write-Host "Setting remote to: $repo"
git remote remove origin
git remote add origin $remoteUrl
git branch -M main

Write-Host "Pushing to GitHub..."
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
}
else {
    Write-Host "Push failed. Please check your token permissions." -ForegroundColor Red
    Write-Host "Ensure the token has 'Contents' -> 'Read and Write' permission."
}
