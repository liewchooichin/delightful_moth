# Javascript

Revise my Javascript before the start of the SE programme.

## Using Javascript only

16 Aug

To run the test:

```
node <filename>.js
```

Trye Typescript again. This time without the node or package.json. The **tsc** command line appears to be working. Using the command line seems to be clearer what is needed for the compiler to work.

```
tsc --module commonjs --lib es2023,dom --target es2023 --outDir ../out --strict tru
e num09.ts
```

## Typescript

15 Aug

Typescript is quite difficult to get right.

Abandon Typescript for now.

When using Typescript:

```
# Using the default tsconfig.json
tsc

# The name "test" is the name found in the
# npm package.json "scripts" tags.
npm test
```