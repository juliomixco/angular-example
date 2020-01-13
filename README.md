# Angular Examples

this project contains multiple POC using angular 4 and Express
[Demo](https://angular-examples.herokuapp.com/hero/dashboard)

## Features

- Modular approach
- Lazy loaded modules / code splittings
- Use of Observables
- Use of Services
- REST API (Express) + Angular Cli in a single project (build changes every time)
- Angular routing + Express

## TODO

- Angular Material
- Product CRUD UI
- Log in UI

## Run this project.

to run this project you will need:

- [Angular CLI](https://github.com/angular/angular-cli)
- [Nodemon](https://nodemon.io/)

### Run on cli

first build angular and then start the node server

```
ng build
npm start
```

### Nodemon

If you want to run it using Nodemon:

First you should have installed Nodemon
`npm i -g nodemon`

Under the project folder execute the following command
`nodemon`

nodemon settings are in `nodemon.json` in the root of this project

## Environment Config

if `NODE_ENV=development` edit the config file on `app/config/development.json`

```
{
  "dbURI": "", //mongo db URL
  "host": "http://localhost:3000",
  "sessionSecret": "" //secretKey

}
```

if `NODE_ENV=production` you must set

- `process.env.host`
- `process.env.dbURI`
- `process.env.sessionSecret`

* s
* s
* s

## Recomended Folder Structure

```
└───assets
│
└───environments
│
└───styles
│    │ ─── styles.scss
│    │ ─── _buttons.scss
│    │ ─── _inputs.scss
│    │ ─── _item-grid.scss
│    │ ─── _fonts.scss
│    │ ─── utils.scss
│    │ ─── colors.scss
│    │ ...
│
└───app
│    │ ─── app.module.ts
│    │ ─── app-routing.module.ts
│    │ ─── app.component.ts
│    │ ─── app.component.html
│    │ ─── app.component.scss
│    │
│    └───modules
│    │   │
│    │   └───core
│    │   │   │   core.module.ts
│    │   │   │   file112.txt
│    │   │   │
│    │   │   └───services
│    │   │   │    │───auth.service.ts
│    │   │   │    │───storage.service.ts
│    │   │   │    │───file-upload.service.ts
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───pipes
│    │   │   │    │───user-name-format.pipe.ts
│    │   │   │    │───number-format.pipe.ts
│    │   │   │    │───item-filter.pipe.ts
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───models
│    │   │   │    │───user.model.ts
│    │   │   │    │───report.model.ts
│    │   │   │    │───order.model.ts
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───interceptors
│    │   │   │    │ ...
│    │   │   │
│    │   │      ...
│    │   └───shared
│    │   │   │
│    │   │   └───services
│    │   │   │    │───sort-table-column.service.ts
│    │   │   │    │───highlight-table-column.service.ts
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───pipes
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───models
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───directives
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───components
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───guards
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───resolvers
│    │   │   │    │ ...
│    │   │   │
│    │   │
│    │   └───feature-module-1
│    │   │   │
│    │   │   └───services
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───pipes
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───models
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───directives
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───components
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───guards
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───interceptors
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───resolvers
│    │   │   │    │ ...
│    │   │   │
│    │   │
│    │   └───feature-module-2
│    │   │   │
│    │   │   └───services
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───pipes
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───models
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───directives
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───components
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───guards
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───interceptors
│    │   │   │    │ ...
│    │   │   │
│    │   │   └───resolvers
│    │   │   │    │ ...
│    │   │   │
│


```

# Angular CLI Info

<details>
<summary>Angular CLI Info</summary>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

</details>
