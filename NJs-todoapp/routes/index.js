const router = require("express").Router();
const { json } = require("body-parser");
const { v4: uuidv4 } = require('uuid');

let todoItems = [];

// Get Full list of to do (READ)
router.get('/', (req,res) => {
	res.send(todoItems);
});

// add to do entry (CREATE)
router.post('/', (req,res) =>{
	const todoEntry = req.body;
	todoItems.push({...todoEntry, id: uuidv4()});
	res.send(`user with the name ${todoEntry.name} added`);
});

//Get to-do by ID (Filter)
router.get('/filter', (req,res) =>{
	const {id} = req.params;
	const foundToDo = todoItems.find((todoEntry) => todoEntry.id === id)
	res.send(foundToDo);
});

// delete a to-do (DELETE)
router.delete('/:id', (req,res) => {
	const {id} = req.params;
	todoItems = todoItems.filter((todoEntry) => todoEntry.id != id );
	res.send(`todo deleted from db with ID ${id}`);
});

// Update a to-do (UPDATE)
router.patch('/:id', (req,res) => {
	const {id} = req.params;
	const {name, description, dueDate, status} = req.body;
	const item = todoItems.find((todoEntry) => todoEntry.id === id );

	if(name) item.name = name;
	if(description) item.Description = description;
	if(dueDate) item.dueDate = dueDate;
	if(status) item.status = status;
	
	res.send(`To Do with id ${id} has been updated`);
});

// Sort By Status value
router.get('/sort', (req,res) => {
	todoItems = todoItems.sort( (a,b) => {
		const statusOrder = ['NotDone', 'Done'];
		const aIndex  = statusOrder.indexOf(a.status);
		const bIndex  = statusOrder.indexOf(b.status);

		if(aIndex === bIndex){}
		return aIndex - bIndex;
	});
	
	res.send("Todo List has been sorted");
});

module.exports = router;