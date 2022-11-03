# React-Scheduler-CRUD-Application-with-Node-Js-and-PostgreSQL
Syncfusion React Scheduler CRUD Application with Node Js and PostgreSQL database.

## Prerequisites
- node v14 or higher
- PostgreSQL

## PostgreSql Configuration

- Navigate to the `backend/config/db.config.js` file
- In the `db.config.js` file change the USER, PASSWORD, DB as your database configuration.

## Start Backend Server

- Get inside the `backend` folder
- Open terminal run `npm install` to install required packages 
- Run `node server.js`
- This will run our backend server.

Open API URL on [http://localhost:8080](http://localhost:8080/) to view it in the browser.

## Start Syncfusion React Scheduler 

- In the project directory, Open new terminal run `npm install` to install required packages.
- Run `npm start`
- This will run our frontend application.

Open [http://localhost:8081/](http://localhost:8081/) to view it in the browser.

You can perform CRUD operation on the scheduler.<br>
The CURD action that you are performing will be reflected in the postgreSQL database table.
