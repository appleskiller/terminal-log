#! /usr/bin node

/**
 * run node test
 * or node test --verbose
 */
var logger = require("../index");

var err = new Error("Error message.");

logger.info("Message text.", 'More message.');
logger.warn("Message text.", 'More message.');
logger.error("Message text.", err);
logger.error(err);

logger.verbose(err);
logger.ok("Message text.", "More message.");
logger.fail("Message text.", err);