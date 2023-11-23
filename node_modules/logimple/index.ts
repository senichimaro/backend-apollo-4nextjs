type LogParams = {
  msg?: string
  filepath?: string
  errorLevel?: string
  data?: any
}

class Logger {
  INFO_LEVEL = "INFO"
  WARN_LEVEL = "WARN"
  ERROR_LEVEL = "ERROR"
  DEBUG_LEVEL = "DEBUG"

  constructor() {
  }

  log(logParams: LogParams) {
    const {
      msg,
      filepath,
      errorLevel,
      data
    } = logParams
    this.createMsgString(msg, filepath, errorLevel)
    if (data) console.log(">>> DATA:", data);
  }

  check(msg = '', filepath = '', data = '') {
    this.createMsgString(msg, filepath)
    if (data) console.log(">>> DATA:", data);
  }

  welcome(text = 'logimple') {
    console.log(`
    ####################################################################
    
    ### Welcome to ${text}
    
    ####################################################################
    `)
  }

  private createMsgString(msg = '', filepath = '', errorLevel = '') {
    const str = `${errorLevel ? `>>> ${errorLevel}` : `>>> log`}: ${msg} ${filepath && `| ${filepath} `}| ${new Date().toISOString()}`

    switch(errorLevel){
      case this.INFO_LEVEL: console.info(str); break
      case this.WARN_LEVEL: console.warn(str); break
      case this.ERROR_LEVEL: console.error(str); break
      case this.DEBUG_LEVEL: console.debug(str); break
      default: console.log(str); break
    }
    
  }
}

module.exports = Logger
