
const express = require("express")
const app = express();
const PORT = 3000;
const cors = require("cors");
const connectDB = require("./db");


//Connecting the Database
connectDB();
app.use(express.json())
app.use(cors());
app.use("/api/auth", require("./route"));

app.get('/', (req, res) => {
    res.send('Welcome to my server');
  });
 


app.use('./register',require("./route"));
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))