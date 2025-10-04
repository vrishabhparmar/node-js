## Installation & Setup

    brew tap mongodb/brew
    brew install mongodb-community   

Adds the official MongoDB Homebrew tap and installs the MongoDB Community Edition

## Starting MongoDB

    brew services start mongodb-community   

If you want to starts MongoDB as a background service and enables auto-launch at startup

    mongod --config $(brew --prefix)/etc/mongod.conf   

Manually starts the MongoDB server using the default configuration file

## Stopping MongoDB

    brew services stop mongodb-community   

for stoping the MongoDB service and disables auto-launch

    mongosh admin --eval "db.shutdownServer()"   

Shuts down a manually running mongod instance

## Uninstalling

    brew uninstall mongodb-community
    brew uninstall mongodb-database-tools   

