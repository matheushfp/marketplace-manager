# Marketplace Manager

## About the Project

This project is a simulation of a product management system with the following features:

- **Login Screen**: User authentication.
- **Product Listing**: Display products with options to filter by title and status.
- **Product Creation Screen**: Interface to add new products to the catalog.

This project was made to study Angular concepts like Routing, Route Guards, Interceptors, Reactive Forms, etc.

<br>

<p align="center">
    <img alt="Preview" src="https://i.imgur.com/4COEmRy.png" width="90%">
</p>

## Quick Start

To run the application, you must start the server and the front-end application in separate terminals.

### Requirements
* [Node.js][nodejs-download] (^20 || ^22 || ^24)
* [Angular][angular-download] (v20)

#### Back-end (Express)

1. Open a terminal in the `server` folder.
2. Install the project dependencies:
    ```bash
    npm install
    ```
3. Run the server:
    ```bash
    npm run dev
    ```
The server will be available at: `http://localhost:3000`.

#### Front-end (Angular)

1. Open a terminal in the `web` folder.
2. Install the project dependencies:
    ```bash
    npm install
    ```
3. Start the application:
    ```bash
    ng serve
    ```
The application will be available at: `http://localhost:4200/`.

---
### **Additional Resource**

- The `postman_collection.json` file, located in the `server` folder, contains a collection of endpoints that can be imported into Postman to facilitate API testing.


<!-- Links -->
[nodejs-download]: https://nodejs.org/en/download
[angular-download]: https://angular.dev