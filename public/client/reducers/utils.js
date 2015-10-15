export const createConstants = (names) => {
  return names.reduce((constants, name) => {
    constants[name] = name
    return constants
  }, {})
}
