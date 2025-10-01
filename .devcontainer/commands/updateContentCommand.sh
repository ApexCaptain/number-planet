#!/usr/bin/env bash

echo "🔄 Changing owner of directories $DIR_PATHS_TO_CHANGE_OWNER to $USER"
sudo chown -R $USER:$USER $DIR_PATHS_TO_CHANGE_OWNER

echo "🔄 Updating apt package manager"
sudo apt update -y
sudo apt upgrade -y

echo "🔄 Start synchronization"
./.devcontainer/commands/common/synchronizeProject.sh