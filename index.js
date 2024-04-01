const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

require("./db/connection")

app.use(express.json())
app.use(cors())

app.get("/" , (req,res) => {
    res.send("Hello from backend")
})

app.use("/api" , require("./routes/services"))
app.use("/api" , require("./routes/queries"))
app.use("/api" , require("./routes/users"))

app.listen(port , () => {
    console.log(`Listening to the port ${port}`);
})