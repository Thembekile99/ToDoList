
const express = require("express")
const app = express();
const PORT = 3000;
const cors = require("cors");
const connectDB = require("./database/db");


//Connecting the Database
connectDB();
app.use(express.json())
app.use(cors());
app.use("/api/auth", require("./routes/route"));

app.get('/', (req, res) => {
    res.send('Welcome to my server');
  });
 

app.use("/api", require("./routes/crud"));


app.use('./register',require("./routes/route"));
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))