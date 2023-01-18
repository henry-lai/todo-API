const express =  require("express");
const routes = require('./routes/todo');
const app = express();
const PORT = 8080;


// // middleware
app.use(express.json());

//routes
app.use(require("./routes/todo.js",routes));


// server
app.listen(PORT ,
    () => console.log(`http://localhost:${PORT}`)
);
