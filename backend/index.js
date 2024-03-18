const connectToMongo = require('./db/connect.js');
const express = require('express');
const cors = require('cors');
const auth = require('./routes/auth.routes.js');
const { Server } = require('socket.io');
const GroupModel = require('./models/GroupModel.js'); // Import the GroupModel
connectToMongo();

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    methods:["GET","POST"]
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("---");
});

// Handle user authentication routes
app.use("/api/auth", auth);

const server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

// Attach Socket.IO to the existing HTTP server
const io = new Server(server,{cors: corsOptions});

io.on("connection", (socket) => {
    console.log("User Connected", socket.id);
  
    socket.on("message", ({ group_id, message }) => {
      console.log({ group_id, message });
      socket.to(group_id).emit("receive-message", message);
    });
  
    socket.on("groupJoin", (group_id) => {
      socket.join(group_id);
      console.log(`User joined Group ${group_id}`);
    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
  
