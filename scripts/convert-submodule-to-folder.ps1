# PowerShell script to convert a nested git repo (submodule) into a normal folder
# Run this from the repository root: ./scripts/convert-submodule-to-folder.ps1
# IMPORTANT: this will delete the nested .git directory inside motion-suite-demo and commit the result.

$subpath = "motion-suite-demo"
$nestedGit = Join-Path $subpath ".git"

Write-Host "Converting $subpath to a normal folder..." -ForegroundColor Cyan

if (Test-Path $nestedGit) {
    Write-Host "Removing nested .git at $nestedGit" -ForegroundColor Yellow
    Remove-Item -LiteralPath $nestedGit -Recurse -Force -ErrorAction Stop
    Write-Host "Removed nested .git" -ForegroundColor Green
} else {
    Write-Host "No nested .git found at $nestedGit" -ForegroundColor DarkYellow
}

# If .gitmodules exists and references the submodule, remove the entry
if (Test-Path ".gitmodules") {
    Write-Host "Found .gitmodules — removing references to $subpath" -ForegroundColor Yellow
    # Remove the submodule section for this path
    (Get-Content .gitmodules) -notmatch "\[submodule \"$subpath\"\]" | Set-Content .gitmodules
    git add .gitmodules
    git commit -m "Remove .gitmodules entry for $subpath" || Write-Host "No changes to .gitmodules to commit"
}

# Stage the folder and commit
Write-Host "Staging $subpath for commit" -ForegroundColor Cyan
git add --all $subpath

Write-Host "Committing changes" -ForegroundColor Cyan
git commit -m "Convert $subpath to normal folder" || Write-Host "Nothing to commit or commit failed"

Write-Host "You can now push the changes with: git push" -ForegroundColor Green

Write-Host "If you used the folder previously as a submodule, confirm the parent repo has no submodule reference: git config --file .git/config --get-regexp submodule || true" -ForegroundColor Yellow
