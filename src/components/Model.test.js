var assert = require('assert')

import * as model from './Model'

test('The total number of card "types" is 13.', () => {
  expect(model.types.length).toBe(13)
})

test('The total number of card colors is 4.', () => {
  expect(model.colors.length).toBe(4)
})

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1)
//     })
//   })
// })
