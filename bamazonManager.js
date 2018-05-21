var mysql = require('mysql');
var inquirer = require('inquirer');
var clc = require('cli-color');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
      user: "root",
      password: "",
    database: "bamazon"
});

connection.connect(error => {
    if (error) throw error;
    console.log('connect as id ' + connection.threadId + '\n');
    manager();
})

function manager() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'manageProducts',
            message: 'What would you like to do?',
            choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
        }
    ]).then(answers => { 
    
        if (answers.manageProducts === 'View Products for Sale') {
    
            viewAllItems();
    
        } else if (answers.manageProducts === 'View Low Inventory') {
    
            viewLowInventory();
    
        } else if (answers.manageProducts === 'Add to Inventory') {
    
            addMore();

        } else {
    
            newItem();
            
        }
    })
}


function viewAllItems() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        console.log('\n' + clc.cyan('ALL AVAILABLE ITEMS') + '\n=====================\n');
        res.forEach(i => {
            console.log(clc.green('Item ID:') + ' ' + i.item_id + '\n' + clc.green('Item:' ) + ' ' + i.product_name.toUpperCase() + '\n' + clc.green('Price:') + ' $' + i.price + '\n' + clc.green('Quantity:') + ' ' + i.stock_quantity + '\n=====================\n');
        });

        manager();

    })

}

function viewLowInventory() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        console.log('\n' + clc.red('LOW INVENTORY') + '\n=====================\n');

        res.forEach(i => {
            if (i.stock_quantity < 5) {
                    console.log('Item ID: ' + i.item_id + '\nItem: ' + i.product_name.toUpperCase() + '\nPrice: $' + i.price + '\nQuantity: ' + i.stock_quantity + '\n=====================\n');
            };
        });

        manager();

    })

}

function addMore() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;

        inquirer.prompt([
            {
                type: 'list',
                name: 'addStock',
                message: 'Which item would you like to add more of?',
                choices: function() {
                    var itemArray = [];
                    res.forEach(i => {
                        itemArray.push(i.product_name);
                    });
                    return itemArray;
                }
            },
            {
                type: 'input',
                name: 'addQuantity',
                message: 'How many would you like to add?'
            }
        ]).then(answers => {

            var stockItem;

            res.forEach(i => {
                if (answers.addStock == i.product_name) {
                    stockItem = i;
                }
            })

            var newStock = parseInt(stockItem.stock_quantity) + parseInt(answers.addQuantity);
            
            connection.query('UPDATE products SET ? where ?', 
                [
                    {
                        stock_quantity: newStock
                    }, 
                    {
                        product_name: stockItem.product_name
                    }
                ], function (err, res) {
                    if (err) throw err;
                    console.log('\nYou added ' + clc.yellow(answers.addQuantity) + ' ' + stockItem.product_name + '(s)');
                    console.log('There are now a total of ' + clc.magenta(newStock) + '\n');

                    manager();

                }); // end sql update

        }); // end prompt


    }); // end read sql
} // end function

function newItem() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'newItemName',
            message: 'What item would you like to add to the inventory?'
        },
        {
            type: 'input',
            name: 'newItemDept',
            message: 'What department does this item belong in?'
        },
        {
            type: 'input',
            name: 'newItemPrice',
            message: 'How much does this new item cost?'
        },
        {
            type: 'input',
            name: 'newItemQuantity',
            message: 'How many would you like to add?'
        }
    ]).then(answers => {
        var newItemData = 
            {
                product_name: answers.newItemName,
                department_name: answers.newItemDept,
                price: answers.newItemPrice,
                stock_quantity: answers.newItemQuantity
            };
        connection.query('INSERT INTO products SET ?', newItemData, function (err, res) {
            if (err) throw err;
            console.log('\nYou added ' + answers.newItemName + ' for $' + answers.newItemPrice + '\n');

            manager();

        });


    })
}