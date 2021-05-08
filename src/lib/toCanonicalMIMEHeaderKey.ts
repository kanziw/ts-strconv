export const toCanonicalMIMEHeaderKey = (key: string): string => (
  key
    .split('-')
    .map(str => str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str)
    .join('-')
)
