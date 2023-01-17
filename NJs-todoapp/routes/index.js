const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');



const todoItems = [
	{
		name: "Henry",
		description: "Lorem Ipsum",
		dueDate: "2022-01-07",
		status: "Done"
	},
   	{ 
		name: "Henry2",
		description: "Lorem Ipsum2",
		dueDate: "2022-01-08", 
		status: "NotDone"
	}
]

router.get('/', (req,res) => {
	//console.log(todoItems);

	res.send(todoItems);
});

router.post('/', (req,res) =>{
	const todoEntry = req.body;
	const userId = uuidv4(); 
	const userWithId = {}
	todoItems.push(todoEntry);
	res.send(`user with the name ${todoEntry.name} added`);
})

//export default router;
module.exports = router;