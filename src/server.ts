import mongoose from "mongoose"
import app from "./app";
import config from "./config";
const port = process.env.PORT || 3000

async function main() {
   try {
     await mongoose.connect(config.database_url as string);
     console.log(`Database Connected Successfully`)
     app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port} `)
    })
   } catch (error) {
    console.log(`Failed to connect`,error)
   }

  }

  main()