INSERT INTO departments (department_name)
VALUES
  ('G&A'),
  ('Marketing'),
  ('Engineering'),
  ('Product'),
  ('Finance');

INSERT INTO roles (title,salary,department_id)
VALUES
  ('Associate', 60000,1 ),
  ('Manager', 85000,2 ),
  ('Engineer', 125000,3),
  ('Sales Partner', 95000,4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Bob','Smith',2,NULL),
('John','Smith',1,1),
('Edward','Smith',4,2),
('Blake','Smith',3,1),
('Tanya','Smith',1,1);