const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(MONGODB_URI);

require("./routes/apiRoutes")(app);

const root = path.join(__dirname, 'client', 'build')
app.use(express.static(root));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'), { root });
});


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});