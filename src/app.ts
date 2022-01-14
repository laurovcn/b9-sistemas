import express from 'express'
import { router } from './routes/routes'
import { connectToDatabase } from './mongodb/mongo.service'

const port = 3001
const app = express()

connectToDatabase()
    .then(() => { 
      
        app.use(express.json())

        app.use(router)

        app.listen(port, () => {
            console.log(` 🚀 Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

