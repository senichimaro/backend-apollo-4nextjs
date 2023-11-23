"use strict";
class Logger {
    constructor() {
        this.INFO_LEVEL = "INFO";
        this.WARN_LEVEL = "WARN";
        this.ERROR_LEVEL = "ERROR";
        this.DEBUG_LEVEL = "DEBUG";
    }
    log(logParams) {
        const { msg, filepath, errorLevel, data } = logParams;
        this.createMsgString(msg, filepath, errorLevel);
        if (data)
            console.log(">>> DATA:", data);
    }
    check(msg = '', filepath = '', data = '') {
        this.createMsgString(msg, filepath);
        if (data)
            console.log(">>> DATA:", data);
    }
    welcome(text = 'logimple') {
        console.log(`
    ####################################################################
    
    ### Welcome to ${text}
    
    ####################################################################
    `);
    }
    createMsgString(msg = '', filepath = '', errorLevel = '') {
        const str = `${errorLevel ? `>>> ${errorLevel}` : `>>> log`}: ${msg} ${filepath && `| ${filepath} `}| ${new Date().toISOString()}`;
        switch (errorLevel) {
            case this.INFO_LEVEL:
                console.info(str);
                break;
            case this.WARN_LEVEL:
                console.warn(str);
                break;
            case this.ERROR_LEVEL:
                console.error(str);
                break;
            case this.DEBUG_LEVEL:
                console.debug(str);
                break;
            default:
                console.log(str);
                break;
        }
    }
}
module.exports = Logger;
