# My NodeJs Adventures (CHAPTER 1 - NodeJs Core Concepts)

> NodeJs was created in 2009 By Ryan Dahl.

> READ EVAL PLAY LOOP - REPL

- learn more indepth about how node js run as server side and is able to persist data + do other amazing stuffs.

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
5. UTILS - (async patterns section of the tutorial - await patterns in John Smilga's pack)
6. EVENTS - (events section of the tutorial)

> the fs async methods, and the sync methods work simply by using the same async or sync patterns in js. i.e concurency/concurency

33 Node Package Manager (NPM)

### NPM use-cases

1. Re-use our own code in other projects.
2. Share our solutions.
3. Use code written by other developers

> Npm packages/dependencies/modules are simply chunks of re-usable JS code.

> There is no quality control in the NPM registry - its up to you to be on the look out for only quality content. A good metric for
> quality of a package, is the number of weekly donwloads.

> TO UNINSTALL WITH NPM, SIMPLY DELETE NODE MODULES FOLDER, DELETE NPM LOCK FILE, THEN REMOVE THE NAME OF PACKAGE YOU WISH TO INSTALL
> FROM THE LIST OF DEPENDENCIES AND RE-RUN THE GENERAL INSTALLATION COMMAND - "NPM INSTALL"

OR

> USE THE UNINSTALL COMMAND - NPM UNINSTALL <PACKAGE NAME>

> NPX is a package runner - to run an npm package and have it function without installing it - e.g the create-react-app package
> runs and install react without us needing to install it.

> Studying package version numbers e.g "^4.17.30"

> - 4 is a major(breaking) change
> - 17 is minor change - i.e still backward compatible
> - 30 is a minor patch(maybe a bug fix) - still very compatible

## Events

- You can use a single emmitter to call multiple same type events in node js.
- Always set up all events before emmitting. Only events set up before the emmitter will be implemented.

## Streams

> Streams are used to read or write data sequentially.

1. Writeabe
2. Readable
3. Duplex
4. Transform

- streams extend the event emmitter

## How the web works

- HTTP request message - HTTP response message
- Servers are computer!!! - just with some differences like - No GUI, and other differences.
- Cloud - bunch of computers/servers connected together.

# My NodeJs Adventures (CHAPTER 2 - ExpressJs)

- a port is a communication end-point

> There are some specially assigned ports but its safe to use ones with high figures like 5000
> Keywords: MIME type, Headers

> to install specific expressjs version - e.g "pnpm install express@4.18.1 --save"

## Methods in express

1. .get
2. .put
3. .post
4. .all
5. .use
6. .listen

> Static files are files that the server does not have to change - they are files like repeating images

### what is an API

At this level, an API, is an HTTP interface that helps app front-end to communicate with the back-end of an app via
JSON responses.

> when adding conditionals during creating an API, always remember to add a return so that that conditional will close after
> that process is completed else, express will through an error.

## Express middleware

> express middleware, are functions that execute during the request to the server. They have access to the request and response
> objects, and "next" as well.

> The urlencoded middleware helps us get contents(body) of submitted forms.
> The json middleware handles json data on post requests.

> 201 is the success message code for POST REQUESTS.
> 400 is the error/not successful message code for POST REQUESTS.

> 200 is the success message code for PUT REQUESTS.
> 404 is the error/not successful message code for PUT REQUESTS.

> 200 is the success message code for DELETE REQUESTS.
> 404 is the error/not successful message code for DELETE REQUESTS.

### Using Postman to construct a post request

1. select post and add your route
2. go to body
3. select raw
4. select the json option instead of the text option from the type menu
5. ...
