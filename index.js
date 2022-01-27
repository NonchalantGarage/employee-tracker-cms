const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require("console.table");
const res = require("express/lib/response");

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

const addRow = () => {
  return inquirer.prompt([
    {
      name: "departmentName",
      message: "What is the department name you would like to add?",
      type: "input",
    },
  ])
  .then(newDepartmentName=>{
    db.query(`INSERT INTO department(department_name) VALUES ('${newDepartmentName.departmentName}')`, (err,table)=>{
      console.table(table);
    })
    // .then(init());
  })
};
// db.query(`Select * FROM department`, (err,rows)=>{
//   console.table(rows)
// })

init().then((whatToDo) => {
  // console.log(whatToDo.whatToDo);
  switch (whatToDo.whatToDo) {
    case "View all departments":
      db.query(`Select * FROM department`, (err, rows) => {
        console.table(rows);
      });
      break;
    case "View all roles":
      db.query(`Select * FROM roles`, (err, rows) => {
        console.table(rows);
      });
      break;
    case "View all employees":
      db.query(`Select * FROM employee`, (err, rows) => {
        console.table(rows);
      });
      break;
    case "Add a department":
        addRow();
      break;
  }
});
