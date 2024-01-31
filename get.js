const contentful = require('contentful')
const dotenv = require('dotenv')
dotenv.config()

const client = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.CONTENT_DELIVERY_ACCESS_TOKEN,
})
client
  .getEntry(process.env.ENTRY_ID)
  .then((entry) => console.log(JSON.stringify(entry, null, 2)))
  .catch((err) => console.log(err))