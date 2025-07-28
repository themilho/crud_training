const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("../routes/indexRoutes")

router(app);

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`)
})

