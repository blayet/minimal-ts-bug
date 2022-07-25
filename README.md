# minimal-ts-bug
Minimal reproduction of problem importing ESM lib with TS definitions

# Build

In minimal-lib dir:
* npm install
* npm run build

In minimal-app dir:
* npm install
* npx tsc

# Error compiling app

index.ts:3:22 - error TS1471: Module 'minimal-lib/dist/math.js' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.

3 import { Math } from 'minimal-lib/dist/math.js';
                       ~~~~~~~~~~~~~~~~~~~~~~~~~~

# Other info

* Removing the .d.ts from the lib resolves the error
* Renaming the .d.ts to .d.mts resolves the error

Based on comments in https://github.com/microsoft/TypeScript/issues/46408 the problem is that the import syntax implies ESM
but the lib module is being resolved as CJS. Making above changes causes typescript compiler to properly interpret as ESM.
(As expected based on lib package type of module.

I am reluctant to use package export field in the lib because ultimately I want to bundle a web app.
And the following issue (which I largely don't understand) suggests that this isn't well supported currently.
https://github.com/microsoft/TypeScript/issues/33079#issuecomment-1169405677
