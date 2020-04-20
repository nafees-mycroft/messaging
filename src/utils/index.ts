export function randomString (length = 16): string {
  const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array(length).fill(null).map(
    () => c[~~(Math.random() * c.length)]
  ).join('')
}
