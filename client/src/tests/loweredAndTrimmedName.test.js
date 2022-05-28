const getLoweredAndTrimmedName = require('../utils/appName').getLoweredAndTrimmedName

test('lowered and trimmed "a"', () => {
    const result = getLoweredAndTrimmedName("a")
    expect(result).toBe("a");
})

test('lowered and trimmed "A"', () => {
    const result = getLoweredAndTrimmedName("A")
    expect(result).toBe("a");
})

test('lowered and trimmed " a "', () => {
    const result = getLoweredAndTrimmedName(" a ")
    expect(result).toBe("a");
})

test('lowered and trimmed " A "', () => {
    const result = getLoweredAndTrimmedName(" A ")
    expect(result).toBe("a");
})

test('lowered and trimmed "Gloria Victis"', () => {
    const result = getLoweredAndTrimmedName("Gloria Victis")
    expect(result).toBe("gloria victis");
})

test('lowered and trimmed " Gloria Victis "', () => {
    const result = getLoweredAndTrimmedName(" Gloria Victis ")
    expect(result).toBe("gloria victis");
})

test('lowered and trimmed "gloria victis"', () => {
    const result = getLoweredAndTrimmedName("gloria victis")
    expect(result).toBe("gloria victis");
})

test('lowered and trimmed " gloria victis "', () => {
    const result = getLoweredAndTrimmedName(" gloria victis ")
    expect(result).toBe("gloria victis");
})