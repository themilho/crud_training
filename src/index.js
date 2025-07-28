const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("../routes/indexRoutes");
const connectionDatabase = require("../database/connectionDatabase.js");
const tables = require("../database/tables.js")


router(app);
tables.init(connectionDatabase);

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`)
})

