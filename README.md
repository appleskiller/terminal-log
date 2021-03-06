# terminal-log

Terminal string styling logger

## install
```
$ npm install terminal-log
```

## usage

```javascript
var logger = require("terminal-log");
var err = new Error("Error message.");
logger.info("Message text.", 'More message.');
logger.warn("Message text.", 'More message.');
// will print more logs to terminal if using --verbose
logger.error("Message text.", err);
// logger.error("Message text.", 'More message.');

// will print more logs to terminal if using --verbose
logger.verbose(err);
logger.ok("Message text.", "More message.");
// will print more logs to terminal if using --verbose
logger.fail("Message text.", err);
```

![screenshot 1](https://github.com/appleskiller/terminal-log/raw/master/screenshots/1.png)

cli --verbose

![screenshot 2](https://github.com/appleskiller/terminal-log/raw/master/screenshots/2.png)

## api

The terminal-log module can help developer improving the interactive experience of cli app. Tell your user what has happened through the log, and what to do next.

ps: will print more logs to terminal if using --verbose

### **logger.info(msg[, submsg])**

- `msg` String
- `submsg` String

Standard interface

### **logger.warn(msg[, submsg])**

- `msg` String
- `submsg` String | Object | Error

Standard interface

### **logger.error([msg] [, submsg])**

- `msg` String | Object | Error
- `submsg` String | Object | Error

Standard interface

### **logger.verbose(msg)**

- `msg` String | Object | Error

Advanced interface. Nothing output unless `--verbose` in `process.argv`

### **logger.ok(msg[, submsg])**

- `msg` String
- `submsg` String

Advanced interface

### **logger.fail([msg] [, submsg])**

- `msg` String | Object | Error
- `submsg` String | Object | Error

Advanced interface. Will exit process after call.