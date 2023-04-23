# Rolebasedauth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## installation guide after download from git
npm cache clean --force
npm install
## for need to start backend server of JSON data
json-server --watch db.json 
or
npm install -g json-server
npx json-server --watch db.json

## installation guide
ng new rolebasedauth
ng add @angular/material
npm install ngx-toastr -save
json-server --watch db.json 
or
npm install -g json-server
npx json-server --watch db.json

ng g c register
ng g c login
ng g c home
ng g c userlisting
ng g c updatepopup
ng g s service/auth
ng g g guard/auth



