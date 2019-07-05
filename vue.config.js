import dotenv from 'dotenv'
const result = dotenv.config()
if (result.error) {
  throw result.error
}
module.exports = {
  test: process.env.TEST
}
