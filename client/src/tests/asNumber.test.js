const getAsNumber = require('../utils/appName').getAsNumber

test('get 1 as a number', () => {
    const result = getAsNumber("1")
    expect(result).toBe(1);
})

test('get -1 as a number', () => {
    const result = getAsNumber("-1")
    expect(result).toBe(-1);
})

test('get "Gloria Victis" as a number', () => {
    const result = getAsNumber("Gloria Victis")
    expect(result).toBe(undefined);
})

test('get "one" as a number', () => {
    const result = getAsNumber("one")
    expect(result).toBe(undefined);
})