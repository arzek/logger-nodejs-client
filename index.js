const axios = require('axios');
const publicIp = require('public-ip');

const sendLog = async ({ level, message, context, LOGGER_TOKEN, LOGGER_URL }) => {
  const env = await publicIp.v4();
  const data = {
    token: LOGGER_TOKEN,
    env,
    level,
    message,
    context
  }
  return axios.post(LOGGER_URL, data)
}

module.exports = ({ token: LOGGER_TOKEN, api: LOGGER_URL }) => ({
  info: (message, context) => sendLog({ level: 'INFO', message, context, LOGGER_TOKEN, LOGGER_URL }),
  debug: (message, context) => sendLog({ level: 'DEBUG', message, context, LOGGER_TOKEN, LOGGER_URL }),
  notice: (message, context) => sendLog({ level: 'NOTICE', message, context, LOGGER_TOKEN, LOGGER_URL }),
  warning: (message, context) => sendLog({ level: 'WARNING', message, context, LOGGER_TOKEN, LOGGER_URL }),
  error: (message, context) => sendLog({ level: 'ERROR', message, context, LOGGER_TOKEN, LOGGER_URL }),
  critical: (message, context) => sendLog({ level: 'CRITICAL', message, context, LOGGER_TOKEN, LOGGER_URL }),
  alert: (message, context) => sendLog({ level: 'ALERT', message, context, LOGGER_TOKEN, LOGGER_URL }),
  emergency: (message, context) => sendLog({ level: 'EMERGENCY', message, context, LOGGER_TOKEN, LOGGER_URL })
})