#!/bin/sh
echo 'Compiling ts'
tsc --outDir ./out ./src/num02.ts
echo 'Running node'
node ./out/num02.js
