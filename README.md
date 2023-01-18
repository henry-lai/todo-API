# todo-API
A minimal todo REST API written in nodejs with express. using an array as a database to store ToDO Items.

main program: app.js

routes:
  / #home directory
  /todo - CRUD operations of todo list using HTTP : [GET,POST,PATCH,DELETE]
  /filter - Get a specific todo entry by giving id as param
  /sort - Sort existing todo by `status` = "NotDone". Moves all "NotDone"  to front of array
