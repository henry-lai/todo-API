const express =  require("express");
const routes = require('./routes/todo.js');
const app = express();
const PORT = 8080;


// // middleware
app.use(express.json());

//routes
//app.use(require("./routes/todo.js",routes));
app.use('/todo', routes);

app.get('/', (req,res) => res.send('Hello at root directory, Please go to /todo route'));


// server
app.listen(PORT ,
    () => console.log(`http://localhost:${PORT}`)
);
