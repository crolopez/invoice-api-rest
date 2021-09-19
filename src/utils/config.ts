export function getConfig(): any {
  if (!process.env.MONGODB_TOKEN) {
    throw new Error('MONGODB_TOKEN is undefined')
  }
  return {
    MONGODB_TOKEN: process.env.MONGODB_TOKEN as string,
  }
}
