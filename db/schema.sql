DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id),
);

CREATE TABLE roles(
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id) REFERENCES department(id),
)

CREATE table(
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER DEFAULT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
)
