var mysql = require('mysql');
var inquirer = require('inquirer');
var clc = require('cli-color');
var Table = require('cli-table');



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
    supervise();
})

function supervise() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'supervise',
            message: 'Hey supe. What would you like to do?',
            choices: ['View Product Sales by Department', 'Create New Department']
        }
    ]).then(answers => {
        if (answers.supervise == 'View Product Sales by Department') {
            viewSales();
        }
    })
}


function viewSales() {
    
    connection.query(
        'SELECT * FROM departments', function (err, res) {
        if (err) throw err;

        var table = new Table({
            head: ["department_id", "department_name", "over_head_costs", "product_sales", "total_profit"],
           colWidths: [20, 20, 20, 20,20]
        });

        res.forEach(i => {

            totalProfit = i.product_sales - i.over_head_costs;

            table.push(
                [i.department_id, i.department_name, i.over_head_costs, parseInt(i.product_sales), parseInt(totalProfit)],
            );
        })

        console.log(table.toString());
        

    })
}