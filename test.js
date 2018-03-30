const codes = require('.')
const {isPlainObject} = require('lodash')

test('it is an object', () => {
  expect(isPlainObject(codes)).toBe(true)
})

test('has Crowdin Language Codes as keys', () => {
  expect(codes['zh-TW']).toEqual({
    language: 'Chinese Traditional',
    editorCode: 'zhtw',
    crowdinLanguageCode: 'zh-TW'
  })
})

test('has codes for over 300 languages', () => {
  expect(Object.keys(codes).length).toBeGreaterThan(300)
})

test('has a complete object for every value', () => {
  const values = Object.values(codes)
  expect(values.every(value => {
    return value.language.length &&
    value.editorCode.length &&
    value.crowdinLanguageCode.length
  })).toBe(true)
})
