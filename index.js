/**
 * Wood Plugin Module.
 * log类
 * by blucehuang on 2018-11-22
 */
const Log = require('./src/log');

module.exports = (app = {}, config = {}) => {
  let recordReq = async function(req, res, next) {
    let account_id = req.account ? req.account.account_id : "";
    let ips = JSON.stringify(req.ips);
    this.info(`account_id:${account_id}, ip: ${req.ip}, x-forwarded-for: ${ips}, req: ${req.path}, data: ${req.method === 'GET' ? JSON.stringify(req.query) : JSON.stringify(req.body)}`);
    next();
  };

  if (app.config.cluster.cpus > 1) {
    Log.configure(config['cluster']);
  } else {
    Log.configure(config['single']);
  }
  app.Log = Log.logger();
  app.Log.recordReq = recordReq.bind(Log.logger());

  if (config.useMiddle)
    app.application.use('/', app.Log.recordReq);
  if (app.addAppProp) app.addAppProp('Log', app.Log);
  return app;
}
