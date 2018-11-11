# BikeUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

==================================

## sqlite3

/Users/robinjohnhopkins/workspace/building-first-app-with-spring-boot-angularjs

sqlite3 -version

sqlite3 bike.db
.help
paste  sql/bike.sql into command prompt
.tables
.quit
now you see bike.db created

as I have nvm - do this to install yarn
brew install yarn --without-node

npm i -g @angular/cli
ng version

ng serve --proxy-config proxy.conf.json
{
  "/server": {
    "target": "http://localhost:8080",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug",
    "pathRewrite": {
      "^/server" : ""
    }
  }
}

#then you have a node config which gets server side stuff from the given proxy in this case spring
http://localhost:4200/server/api/v1/bikes

ng g service services/bike
ng g component components/admin
ng g component components/view-registration
npm install bootstrap							bootstrap@4.1.3
npm i @angular-devkit/core --save

in styles.css
@import '~bootstrap/dist/css/bootstrap.min.css';

## for production, server.js added 

for prod added server.js
npm i express-http-proxy --save
npm i cors --save
npm i port --save
ng build --prod								#build for production
node server.js									#runs production build

