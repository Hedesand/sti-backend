const cors = require("cors")
const express = require("express");
const { header } = require("express/lib/request");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express()
const PORT = process.env.PORT || 3000

app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true}));
app.use(cors())

app.get ("/", (req, res)=>{
headers= {"http_status":200, "cache-control": "no-cache"}
body={"status": "available"}
res.status(200) .send(body)
})

app.listen(PORT, ()=>{
    console.log('STARTED LISTENING ON PORT ${PORT}')
});