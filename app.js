import express from 'express';
import bodyParser from 'body-parser';
import PostRoutes from "./Router/PostRouter.js"
import {dbConnection} from "./dbConnection/DbConnection.js"

const app=express()

app.use(bodyParser.json());
app.use('/api/posts', PostRoutes);

dbConnection()
app.listen(4000,()=>{
    console.log("server is running at 4000 Port")
})

export default app