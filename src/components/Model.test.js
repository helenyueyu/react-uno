var assert = require('assert')

import cards from './Model'

test('length is 9', () => {
  expect(cards.length).toBe(8)
})

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1)
//     })
//   })
// })
