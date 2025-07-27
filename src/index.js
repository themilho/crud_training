import express from "express";
const app = express();
const port = process.env.PORT || 3000;
const router =

router(app);

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`)
})

