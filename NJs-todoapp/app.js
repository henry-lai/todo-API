const express =  require("express");
const routes = require('./routes');
const app = express();
const PORT = 8080;


// // middleware
app.use(express.json());

//routes
app.use(require("./routes/index.js",routes));

// server
app.listen(PORT ,
    () => console.log(`http://localhost:${PORT}`)
);
