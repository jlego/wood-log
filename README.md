# wood-log

log client based on log4js for wood framework

## Install

```bash
$ npm i wood-log --save
```

log Plugin for wood, support wood application access to log.

This plugin based on log4js

## Configuration

Change `${app_root}/config/plugins.js` to enable log plugin:

```js
exports.log = {
  package: 'wood-log',
  enable: true,
  config: {
    cluster: {
      appenders: {
        normal: {
          type: 'dateFile',
          filename: '/data/logs/activity.log',
          pattern: "-yyyy-MM-dd",
          alwaysIncludePattern: true
        }
      },
      categories: {
        default: {
          appenders: ['normal'],
          level: 'trace'
        }
      }
    },

    single: {
      appenders: {
        normal: {
          type: 'dateFile',
          filename: 'logs/activity.log',
          pattern: "-yyyy-MM-dd",
          alwaysIncludePattern: true
        },
        console: {
          type: 'console'
        }
      },
      categories: {
        default: {
          appenders: [
            'console', 'normal'
          ],
          level: 'trace'
        }
      }
    }
  }
```

when app run under cluster mode use the cluster config, others use single config

## Use
``` js
const {
  Log
} = require('../../index'); // app entry

Log.debug("some thing");
Log.error("some thing");
Log.info("some thing");

```

## Questions & Suggestions

Please open an issue [here]().

## License

[MIT](LICENSE)