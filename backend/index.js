const connectToMongo = require('./db/connect.js');
const express = require('express');
const cors = require('cors');
const auth = require('./routes/auth.routes.js');

connectToMongo();

const app = express();
const port = 5000;
//jay
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, // Allow credentials (cookies) to be sent
  };
  
  app.use(cors(corsOptions));

app.use(express.json());
app.get('/', (req, res) => {
    res.send("---");
});
app.use("/api/auth", auth);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
