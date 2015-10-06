import Qs from 'qs'

export const stringifyLocation = (location) => {
  const query = Qs.stringify(location.state, { arrayFormat: 'brackets' })
  return `${location.pathname}${query && `?${query}`}`
}
