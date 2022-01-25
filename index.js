const inquirer = require("inquirer");
const db = require('./db/connection')
const cTable = require('console.table');
 

const init = () => {
  return inquirer.prompt([
    {
      name: "whatToDo",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ]);
};

// db.query(`Select * FROM department`, (err,rows)=>{
//   console.table(rows)
// })



init()
.then(whatToDo =>{
    // console.log(whatToDo.whatToDo);
  switch (whatToDo.whatToDo){
    case 'View all departments':
      db.query(`Select * FROM department`, (err,rows)=>{
        console.table(rows);
      })
      break;
    case 'View all roles':
      db.query(`Select * FROM roles`, (err,rows)=>{
        console.table(rows);
      })
      break;
  }
})
.then(init())
