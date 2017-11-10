/* global describe, it */

const testToken = 'QZ8GLK7G'
const threewords = require('../index.js')(testToken)
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)

const testAddress = 'index.home.raft'.split('.')
const testAddressGerman = 'welche.tischtennis.bekannte'.split('.')
const testCoords = {lat: 51.521251, lng: -0.203586}

console.log(threewords.coordsToWords)

describe('wordsToCoords', () => {
  it('should return a promise', () =>
    expect(
      threewords.wordsToCoords(...testAddress)
    ).to.be.a(
      'Promise'
    )
  )

  it('should return the correct address', () =>
    expect(
      threewords.wordsToCoords(...testAddress)
    ).to.eventually.become(
      testCoords
    )
  )

  it('should support different languages', () =>
    expect(
      threewords.wordsToCoords(...testAddressGerman),
      'de'
    ).to.eventually.become(
      testCoords
    )
  )
})

describe('coordsToWords', () => {
  it('should return a promise', () =>
    expect(
      threewords.coordsToWords(testCoords.lat, testCoords.lng)
    ).to.be.a(
      'Promise'
    )
  )

  it('should return the correct coords', () =>
    expect(
      threewords.coordsToWords(testCoords.lat, testCoords.lng)
    ).to.eventually.become(
      testAddress
    )
  )

  it('should support different languages', () =>
    expect(
      threewords.coordsToWords(testCoords.lat, testCoords.lng, 'de')
    ).to.eventually.become(
      testAddressGerman
    )
  )
})
