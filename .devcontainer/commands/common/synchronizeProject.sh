#!/usr/bin/env bash

echo "🔄 Pulling latest changes from remote repository"
git pull

echo "🔄 Installing dependencies"
yarn

echo "✅ Synchronization is complete"