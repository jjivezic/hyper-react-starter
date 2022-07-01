const env = process.env.REACT_APP_ENVIROMENT
let url, wsUrl

if (env === 'prod') {
  url = 'https://prod...'
  wsUrl = ''
} else {
  url = 'http://localhost:3000/'
  wsUrl = ''
}
export { url, wsUrl }
