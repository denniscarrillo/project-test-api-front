import { openConnectionDB } from './database/db-connection.js'
import app from './app.js'

async function main() {
  await openConnectionDB()
  app.listen(3000)
  console.log('Server is running on port 3000')
}
main()
