var assert = require('assert')

import * as model from './Model'

test('The total number of card "types" is 13.', () => {
  expect(model.types.length).toBe(13)
})

test('The total number of card colors is 4.', () => {
  expect(model.colors.length).toBe(4)
})

test('The deck contains exactly 4 zeroes.', () => {
  expect(model.createMainDeck().filter(x => x.type===0).length).toBe(4)
})

test('The deck contains exactly 8 cards of each other number, ranging from 1 to 9.', () => {
  for (let i = 1; i < 10; i++) {
    expect(model.createMainDeck().filter(x => x.type===i).length).toBe(8)
  }
})

test('Expect the deck to contain 8 of each: null, reverse, draw.', () => {
  expect(model.createMainDeck().filter(x => x.type==="null").length).toBe(8)
  expect(model.createMainDeck().filter(x => x.type==="reverse").length).toBe(8)
  expect(model.createMainDeck().filter(x => x.type==="draw").length).toBe(8)
})

test('Expect the deck to contain 4 of each type of wild card', () => {
  expect(model.createMainDeck().filter(x => x.type==="wild").length).toBe(4)
  expect(model.createMainDeck().filter(x => x.type==="wild4").length).toBe(4)
})

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1)
//     })
//   })
// })
