
const express = require("express")
const app = express();
const PORT = 3000;

app.use(express.json())

const connectDB = require("./db");

//Connecting the Database
connectDB();

app.use("/api/auth", require("./route"));

app.get('/', (req, res) => {
    res.send('Welcome to my server');
  });

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})


app.use('./register',require("routes/user"));
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))