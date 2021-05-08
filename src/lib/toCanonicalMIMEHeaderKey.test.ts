import { toCanonicalMIMEHeaderKey } from './toCanonicalMIMEHeaderKey'

describe('toCanonicalMIMEHeaderKey', () => {
  test.each([
    [ 'content-type', 'Content-Type' ],
  ])('"%s" to be "%s"', (given, expected) => {
    expect(toCanonicalMIMEHeaderKey(given)).toEqual(expected)
  })
})
