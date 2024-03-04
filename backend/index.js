const connectToMongo = require('./db/connect.js');
const express = require('express');
const auth = require('./routes/auth.routes.js');

connectToMongo();

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send("---");
});
app.use("/api/auth", auth);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
