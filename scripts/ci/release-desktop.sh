#!/bin/bash

echo ===============================
echo Releasing Desktop Wallet
echo ===============================

# install script deps
echo
cd ./scripts
npm i

# install/update version of burstjs
cd ../lib
npm install
npm run bootstrap

# install/update angular wallet deps
cd ../web/angular-wallet
npm i

# install/update desktop wallet deps
cd ../../desktop/wallet
npm install
npm run release:all

if [[ $1 = "--publish" ]]
then
    echo ===============================
    echo  RELEASING ARTIFACTS
    echo ===============================
    npm run publish
fi


