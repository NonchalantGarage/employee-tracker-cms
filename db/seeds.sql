INSERT INTO department (department_name)
VALUES
  ('G&A'),
  ('Marketing'),
  ('Engineering'),
  ('Product');

INSERT INTO roles (title,salary)
VALUES
  ('Associate', 60000 ),
  ('Manager', 85000 ),
  ('Engineer', 125000),
  ('Sales Partner', 95000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Bob','Smith',2,3),
('John','Smith',1,1),
('Edward','Smith',4,2),
('Blake','Smith',3,1),
('Tanya','Smith',1,3);