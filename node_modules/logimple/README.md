# logimple

Extendable data logging made simple.

```js
const logimple = require("logimple")
const logger = new logimple()
logger.check("logging init")


try {
    throw new Error("Error tests")
}
catch(error) {
    logger.log({
        msg: "custom message",
        filepath: __dirname,
        errorLevel: "ERROR",
        data: error
    })
}
```

## Installation

This is a Node.js module available through the npm registry.

Before installing, download and install Node.js.

If this is a brand new project, make sure to create a package.json first with the npm init command.

Installation is done using the npm install command:

```sh
npm install logimple
```

## Features

* simple
* flexible
* extensible


## Quick Start 

The quickest way to get started with logimple is to require logimple and instantiate it.

Install by default:

```sh
npm i logimple
```

Require logimple and instantiate it:

```js
const logimple = require("logimple")
const logger = new logimple()
```

Use logimple!

```js
logger.check("logging init")


try {
    logger.log({
        msg: "warning message",
        errorLevel: "WARN"
    })
    throw new Error("Error tests")
}
catch(error) {
    logger.log({
        msg: "error message",
        filepath: __dirname,
        errorLevel: "ERROR",
        data: error
    })
}
```

### Simple check extendable

Early phases of debuggin, ideal to ninja test.

* `logger.check(msg = '', filepath = '', data = '')`

```js
// msg: useful for scan and marking down
logger.check("logging init")

// filepath: check file flow
logger.check("logging init", __dirname)

// data: dump data
logger.check("logging init", '', arg1/error)
```

### Error Level

Robust implementation providing Error Levels: Info, Warn, Error, Debug.

```ts
type LogParams = {
  msg?: string
  filepath?: string
  errorLevel?: string
  data?: any
}

logger.log({
    msg: "text message",
    filepath: __dirname,
    errorLevel: "INFO",
    data: obj
})
```








