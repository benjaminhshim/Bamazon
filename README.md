# Bamazon

# Introduction
Bamazon is an Amazon-like storefront utilized with Node.js and mySql.

# Setup
```npm install``` will install **mysql**, **inquirer**, **nodemon**, **cli-color** and **cli-table**.


# Bamazon
1. ``` bamazonCustomer.js```

    * Displays the ID, name, department, price and quantity of every available product in the store.

    * Prompts customer which product they would like to purchase by ID number.

    * Asks user how many of that product the user would like to purchase.

        - If there is a sufficient amount of the product in stock, it will return the total for that purchase.
        - If there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
        - Once purchased, the stock quantity will update to reflect the purchase.
        - Product sales will also update in the 'departments' table.


2. ``` bamazonManager.js ```

    * Starts with a menu:

        - View Products for Sale
        - View Low Inventory
        - Add to Inventory
        - Add New Product
        - End Session

    * ```View Products for Sale``` will display the ID, name, department price and quantity of every available product in the store.

    * ```View Low Inventory``` will display all products with less than five items in stock.

    * ```Add to Inventory``` allows the manager to "add more" of any item currently in the store.

    * ```Add New Product``` allows the manager to add a new product to the store.


3. ``` bamazonSupervisor.js ```

    * Starts with a menu:

        - View Product Sales by Department
        - Create New Department

    * ```View Product Sales by Department``` displays the sales by each department and calculates the total sales from the overhead cost and product sales.

    * ```Create New Department``` allows the supervisor to create a new department and input overhead costs and product sales.

# Demo Videos

bamazonCustomer (https://youtu.be/b9NfSfZUxCk)

bamazonManager (https://youtu.be/T9QBDYq3wJg)

bamazonSupervisor (https://youtu.be/mgIqfylcZkQ)
