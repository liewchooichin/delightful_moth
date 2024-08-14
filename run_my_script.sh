#!/bin/sh
echo 'Compiling ts'
tsc --outDir ./out ./src/ch1_start.ts
echo 'Running node'
node ./out/ch1_start.js
