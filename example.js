const { info, debug, error } = require('./index')({
  token: 'token',
  api: 'api url'
});

info('Info')

debug('Debug')

error('Error', {
  id: 2
})