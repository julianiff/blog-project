#!/bin/bash
git pull

echo Commit Message please.

read commitMessage
git add . && git commit -m "$commitMessage" && git push