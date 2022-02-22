const dotenv = require('dotenv')
dotenv.config();

var envConfig = null;

switch (process.env.NODE_ENV) {
    case 'debug':
        envConfig = require('../envConfig/debug.json')
    break;
    case 'staging':
        envConfig = require('../envConfig/staging.json')
    break;
    case 'production':
        envConfig = require('../envConfig/production.json')
    break;
    default:
        envConfig = null;
        break;
}

const appName = envConfig.appName;

module.exports = {
    appName
}