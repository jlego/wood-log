/**
 * 日志处理模块
 * Created by huangyong on 2018/11/20.
 */
const log4js = require("log4js");

class Log {
  static configure(opts) {
      log4js.configure(opts);
  }

  static logger(name) {
    let dateFileLog = log4js.getLogger(name);
    return dateFileLog;
  }

  static useLog(name) {
    return log4js.connectLogger(log4js.getLogger(name), { level: log4js.levels.INFO });
  }

  static closeLogger(logger) {
    logger.level = 'OFF'
  }
}

module.exports = Log;