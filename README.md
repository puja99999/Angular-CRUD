# AngularCRUD

This project performs CRUD operations using Angular & Bootstrap UI and stores the data in JSON-server (which will act as a mock REST API to handle HTTP requests and store the data by creating a JSON file). 

## Pre-requisites 

```
Angular CLI: 16.0.4
Node: 18.16.0
Package Manager: npm 9.5.1
Bootstrap UI: 5.3.1
json-server: 0.17.3
```

## Development

- Run `ng new <app-name>` in the command line. It will generate your angular project along with the necessary dependencies.
- Run `npm install -g json-server` to install the JSON server.

## Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running the application

- Run `json-server --watch db.json` for json server. Navigate to `http://localhost:3000/`. This will start the mock server for handling HTTP requests and will create db.json file for storing data. 

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Useful links

- [Angular CLI Overview and Command Reference](https://angular.io/cli) <br>
- [Bootstrap UI](https://getbootstrap.com/docs/5.3/getting-started/introduction/) <br>
- [JSON Server](https://www.npmjs.com/package/json-server) <br>