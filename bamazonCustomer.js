var mysql = require('mysql');
var inquirer = require('inquirer');
var clc = require('cli-color');

var customerItem;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
      user: "root",
      password: "",
    database: "bamazon"
});

connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err;

    console.log('\nFOR SALE\n');
    res.forEach(i => {
        console.log('Item ID: ' + i.item_id + '\nItem: ' + i.product_name.toUpperCase() + '\nPrice: $' + i.price + '\n');
    });

    inquirer.prompt([
        {
            type: 'input',
            name: 'itemId',
            message: 'What is the ID of the item you would like to buy?'
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to buy?'
        }
    ]).then(answers => {

        customerItem;

        res.forEach(i => {
            if (answers.itemId == i.item_id) {
                customerItem = i;
            }
        });

        if (customerItem.stock_quantity > answers.quantity) {

            newQuantity = customerItem.stock_quantity - answers.quantity;
            console.log(newQuantity);
            updateTransaction();
        } else {
            console.log('we are out of stock');
        }
    })

});

function updateTransaction() {
    connection.query(
        'UPDATE products SET ? WHERE ?',
        [
            {
                stock_quantity: newQuantity
            },
            {
                item_id: customerItem.item_id
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log('quantity updated');
        }
    )
}