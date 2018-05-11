DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone X", 'Phones', 1000, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook Pro", 'Laptops', 2500, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Air", 'Laptops', 1000, 3000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iMac Pro", 'Desktop Computers', 5000, 2500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beats By Dre", 'Headphones', 400, 2500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("AirPods", 'Accessories', 160, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Watch", 'Watches', 400, 3500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("AppleTV", 'TVs', 150, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad", 'Tablets', 600, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HomePod", 'Speakers', 350, 1000);

