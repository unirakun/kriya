/* eslint-env jest */
describe('testSetup', () => {
  describe('console.error', () => {
    it('should throw error', () => {
      let error = false
      try {
        console.error('an error')
      } catch (ex) {
        error = true
        expect(ex.message).toEqual('an error')
      }

      expect(error).toBe(true)
    })
  })
})
