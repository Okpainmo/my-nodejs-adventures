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

> 500 is error code for general server error.

### Using Postman to construct a post request

1. select post and add your route
2. go to body
3. select raw
4. select the json option instead of the text option from the type menu
5. ...

# My NodeJs Adventures (CHAPTER 3 - fullstack todos app)

### project analysis

> app.get("api/v1/tasks") - get all tasks
> app.post("api/v1/tasks") - create a new task
> app.get("api/v1/tasks/:id") - get single task
> app.patch("api/v1/tasks/:id") - update single task
> app.delete("api/v1/tasks/:id") - delete single task

> REST API - representational state transfer API
> Rest is a pattern that combined HTTP verbs, route paths, and our resources(data). REST is a pattern not a strictly enforced set of rules.

### MongoDB

> uses json instead of table, rows and columns.
> uses collections instead of tables.
> uses documents instead of rows

> MONGO DB CREDENTIALS
> mongodb+srv://Okpainmo:<password>@node-express-course-pro.acj9pwz.mongodb.net/?retryWrites=true&w=majority

### Mongoose returns a promise

> mongoose.connect() returns a promise

> in mongoose, an instance of a model is called a document.

> A schema is just like a sieve or filter for you data. Only the properties that you set in your schema will be passed to the database. Every other will be ignored.

- Check mongoose docs to learn more about validation.

> ## as an assignment, ensure to read all related docs to learn more deeper about all the related technologies you've leanrt in this course.

### CRUD process - Update using PUT vs using PATCH

> PUT and PATCH are both update methods. But the assumption is that when you use Put, you're trying to replace the existing resource. But PATCH is for partial update.

### Extra mongoose possibilities.

1. sorting
2. selecting
3. limiting
4. skipping
5. Numeric filtering

check the final code base of the stores API project controllers(or anywhere else) to learn more - use the mongoose docs as well.

> By combining skip and limit, you can create API pagination (pages). You simply choose the number of entries to return as a page.
