USE bamazon; 

CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(50) NULL,
  over_head_costs DECIMAL(10,2),
  PRIMARY KEY (department_id)
);

INSERT INTO departments (department_name, over_head_costs)
VALUES ('Phones', 25000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ('Laptops', 20000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ('Desktop Computers', 30000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ('Headphones', 20000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ('Accessories', 15000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ('Watches', 30000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ('TVs', 40000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ('Tablets', 20000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ('Speakers', 20000);

