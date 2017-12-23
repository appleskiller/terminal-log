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
logger.error("Message text.", err);

logger.verbose(err);
logger.ok("Message text.", "More message.");
logger.fail("Message text.", err);
```

![screenshot 1](https://github.com/appleskiller/terminal-log/raw/master/screenshots/1.png)

cli --verbose
```shell
node test --verbose
```
![screenshot 2](https://github.com/appleskiller/terminal-log/raw/master/screenshots/2.png)