var chalk = require('chalk');

function logError(err) {
    ('message' in err) && console.log(chalk.gray(err.message))
    if (process.argv.indexOf("--verbose") !== -1) {
        ('statusCode' in err) && console.log('statusCode :', chalk.gray(err.stack));
        ('stack' in err) && console.log(chalk.gray(err.stack));
    }
}

function errorLog(msg, submsg) {
    console.log(chalk.red('\u2718'), chalk.red(msg));
    if (typeof submsg === "string") {
        console.log(chalk.gray(submsg));
    } else if (typeof submsg === "object") {
        logError(submsg);
    }
}

module.exports = {
    info: function (msg, submsg) {
        console.log(msg);
        submsg && console.log(chalk.gray(submsg));
    },
    warn: function (msg, submsg) {
        console.log(chalk.yellow('!'), chalk.yellow(msg));
        submsg && console.log(chalk.gray(submsg));
    },
    error: function (msg, submsg) {
        errorLog(msg, submsg);
    },

    verbose: function (msg) {
        if (process.argv.indexOf("--verbose") !== -1) {
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