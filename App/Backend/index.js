const express = require('express')
const app = express()
const port = 5000

const mongoDB = require("./db")

mongoDB();

app.get('/', (req, res) => {
    res.send('connected')
})
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-with, Content-TypeError,Accept"
    );
    next();
})

app.use(express.json())

app.use('/api', require("./Routes/CreateUser"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})