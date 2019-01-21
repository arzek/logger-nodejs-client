const axios = require('axios');
const publicIp = require('public-ip');

const { LOGGER_URL, LOGGER_TOKEN } = process.env;

const sendLog = async ({ level, message, context }) => {
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

const info = (message, context) => {
	return sendLog({ level: 'INFO', message, context })
}

const debug = (message, context) => {
	return sendLog({ level: 'DEBUG', message, context })
}

const notice = (message, context) => {
	return sendLog({ level: 'NOTICE', message, context })
}

const warning = (message, context) => {
	return sendLog({ level: 'WARNING', message, context })
}

const error = (message, context) => {
	return sendLog({ level: 'ERROR', message, context })
}

const critical = (message, context) => {
	return sendLog({ level: 'CRITICAL', message, context })
}

const alert = (message, context) => {
	return sendLog({ level: 'ALERT', message, context })
}

const emergency = (message, context) => {
	return sendLog({ level: 'EMERGENCY', message, context })
}

module.exports = {
	info,
	debug,
	notice,
	warning,
	error,
	critical,
	alert,
	emergency
}