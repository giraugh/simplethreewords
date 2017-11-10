const baseAddress = 'https://api.what3words.com/v2'
const fetch = require('node-fetch')

const wordsToCoordsFactory = accessToken => (a, b, c, lang = 'en') =>
  fetch(`${baseAddress}/forward?addr=${a}.${b}.${c}&key=${accessToken}&lang=${lang}&format=json&display=full`)
  .then(response => response.json())
  .then(data => data.geometry)

const coordsToWordsFactory = accessToken => (lat, lng, lang = 'en') =>
  fetch(`${baseAddress}/reverse?coords=${lat},${lng}&key=${accessToken}&lang=${lang}&format=json&display=full`)
  .then(response => response.json())
  .then(data => data.words.split('.'))

module.exports = {
  coordsToWordsFactory,
  wordsToCoordsFactory
}
