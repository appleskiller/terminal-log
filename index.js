var chalk = require('chalk');

const verbose = (process.argv.indexOf("--verbose") !== -1);

function logMore(more) {
    ('statusCode' in more) && console.log('statusCode :', chalk.gray(more.stack));
    ('stack' in more) && console.log(chalk.gray(more.stack));
}

function logError(err) {
    ('message' in err) && console.log(chalk.gray(err.message))
    verbose && logMore(err);
}

function errorLog(msg, submsg) {
    if (typeof msg === "string") {
        console.log(chalk.red('\u2718'), chalk.red(msg));
        if (typeof submsg === "string") {
            console.log(chalk.gray(submsg));
        } else if (typeof submsg === "object") {
            logError(submsg);
        }
    } else if (typeof msg === "object") {
        ('message' in msg) && console.log(chalk.red('\u2718'), chalk.red(msg.message))
        verbose && logMore(msg);
    }
}


module.exports = {
    info: function (msg, submsg) {
        console.log(msg);
        submsg && console.log(chalk.gray(submsg));
    },
    warn: function (msg, submsg) {
        console.log(chalk.yellow('!'), chalk.yellow(msg));
        if (typeof submsg === "string") {
            console.log(chalk.gray(submsg));
        } else if (typeof submsg === "object") {
            logError(submsg);
        }
    },
    error: function (msg, submsg) {
        errorLog(msg, submsg);
    },

    verbose: function (msg) {
        if (verbose) {
            if (typeof msg === "string") {
                console.log(chalk.gray(msg));
            } else if (typeof msg === "object") {
                logError(msg);
            }
        }
    },
    ok: function (msg, submsg) {
        console.log(chalk.green('\u2714'), chalk.green(msg));
        submsg && console.log(chalk.gray(submsg));
    },
    fail: function (msg, submsg) {
        errorLog(msg, submsg);
        process.exit();
    },
};