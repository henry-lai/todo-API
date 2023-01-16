const router = require("express").Router();

const todoItems = [
   { Name: "Henry",Description: "Lorem Ipsum",Due_Date: "2022-01-07", Status: "Done"},
   { Name: "Henry2",Description: "Lorem Ipsum2",Due_Date: "2022-01-08", Status: "NotDone"}
]
router.get("/", (req,res) => {
   res.json({
      message: "Welcome!",
   });
   // res.render("index");
});

router.get('/items', (req,res) =>{
   console.log(todoItems);

   res.json({
      todoItems,
   });
});

module.exports = router;