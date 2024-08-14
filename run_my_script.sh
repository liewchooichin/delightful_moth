#!/bin/sh
echo 'Compiling ts'
tsc --outDir ./out ./src/ch2_function.ts
echo 'Running node'
node ./out/ch2_function.js
