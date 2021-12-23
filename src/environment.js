const env = process.env.REACT_APP_ENVIROMENT
let url
const sourceUrl = 'sdsdds'
const googleApiKey = 'dssssssssssss'
if (env === 'prod') {
  url = 'https://prod...'
} else {
  url = 'http://localhost:3000/'
}
export { url, sourceUrl, googleApiKey }
