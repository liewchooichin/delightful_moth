#!/bin/sh
CURRENT_SCRIPT=num03
echo 'Compiling ts'
tsc --outDir ./out ./src/$CURRENT_SCRIPT.ts
echo 'Running node'
node ./out/$CURRENT_SCRIPT.js
