# My NodeJs Adventures

> NodeJs was created in 2009.

> READ EVAL PLAY LOOP - REPL

- learn about how node js run as server side and is able to persist data + do other amazing stuffs.

## Global Variable

1. \_\_dirname
2. \_\_filename
3. require
4. module
5. process

## Modules

> Modules helps us to decentralize our apps by splitting it into smaller chuncks

- Every file in node is a module.
- Modules - encapsulated code - (only share a minimum)
- an invoked function in a module do not have to be exported. It(the invoked function) will automatically run where ever the module is imported.

## Built In Modules

> There are quite a number of modules in nodesJS - each also having a list of properties - simply go nuts in the docs
> Some important ones are:

1. OS - is a built-in module - no importing/downloading
2. PATH
3. HTTP
4. FS

> the fs async methods, and the sync methods work simply by using the same async or sync patterns in js. i.e concurency/concurency

33 Node Package Manager (NPM)

### NPM use-cases

1. Re-use our own code in other projects.
2. Share our solutions.
3. Use code written by other developers

> Npm packages/dependencies/modules are simply chunks of re-usable JS code.

> There is no quality control in the NPM registry - its up to you to be on the look out for only quality content. A good metric for
> quality of a package, is the number of weekly donwloads.
