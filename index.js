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

const addDepartmentRow = () => {
  return inquirer
    .prompt([
      {
        name: "departmentName",
        message: "What is the department name you would like to add?",
        type: "input",
      },
    ])
    .then((newDepartmentName) => {
      db.query(
        `INSERT INTO department(department_name) VALUES ('${newDepartmentName.departmentName}')`,
        (err, table) => {
          console.table(table);
        }
      );
      return;
    });
};
const addRoleRow = () => {
  return inquirer
    .prompt([
      {
        name: "roleTitle",
        message: "Please enter the role title",
        type: "input",
      },
      {
        name: "roleSalary",
        message: "Please enter the role salary",
        type: "input",
      },
      {
        name: "roleDept",
        message: "Please enter the role department id",
        type: "input",
      },
    ])
    .then((newRole) => {
      // console.log(newRole)
      db.query(
        `INSERT INTO roles(title, salary, department_id) VALUES ('${newRole.roleTitle}','${newRole.roleSalary}','${newRole.roleDept}')`,
        (err, result) => {
          console.table(result);
        }
      );
      // .then(init());
    });
};
const addEmployeeRow = () => {
  return inquirer
    .prompt([
      {
        name: "eeFirstName",
        message: "Please enter the employee first name",
        type: "input",
      },
      {
        name: "eeLastName",
        message: "Please enter the employee last name",
        type: "input",
      },
      {
        name: "eeRoleId",
        message: "Please enter the employee role id",
        type: "input",
      },
      {
        name: "eeManagerId",
        message: "Please enter the employee's managers role id",
        type: "input",
      },
    ])
    .then((newEmployee) => {
      db.query(
        `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${newEmployee.eeFirstName}', '${newEmployee.eeLastName}', '${newEmployee.eeRoleId}','${newEmployee.eeManagerId}')
        `,
        (err, table) => {
          console.table(table);
        }
      );
      // .then(init());
    });
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
      return;
    case "View all roles":
      db.query(`Select * FROM roles`, (err, rows) => {
        console.table(rows);
      });
      return;
    case "View all employees":
      db.query(`Select * FROM employee`, (err, rows) => {
        console.table(rows);
      });
      break;
    case "Add a department":
      addDepartmentRow();
      break;
    case "Add a role":
      addRoleRow();
      break;
    case "Add an employee":
      addEmployeeRow();
      break;
    case "Update an employee role":
      updateEmployee();
      break;
  }
});
