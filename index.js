const {wordsToCoordsFactory, coordsToWordsFactory} = require('./src/conversion.js')

module.exports = accessToken => {
  let [
    wordsToCoords,
    coordsToWords
  ] = [
    wordsToCoordsFactory,
    coordsToWordsFactory
  ].map(f => f(accessToken))

  return {
    wordsToCoords,
    coordsToWords
  }
}
