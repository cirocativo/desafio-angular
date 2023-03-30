# Angular Challenge

A responsive application made to view and manage the features and services of a backend application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Technologies

- Angular CLI 15.2.0
- Angular Material - dialog, form, tree, snackBar, etc.
- Form Validators
- Error handling
- CRUD operations, working locally
- Responsive Web Design

## Installation

### 1. Clone the repository

```
git clone git@github.com:cirocativo/desafio-angular.git
```

### 2. Installing CLI

If you don't have CLI installed, run the following command line:

```
npm install -g @angular/cli
```

### 3. Install all packages used in this project

```
npm install
```

### 4. Run the application

```
ng serve
```

open your browser on http://localhost:4200/ to see the application.

## Features

A simple interface where the user can view all Features of his application disposed in a tree.

A Feature is composed by name, description, and Services. Each Feature can have more than one Service.

A Service is composed by method, endpoint and description.

For both Feature and Service, it is allowed to create, view, edit and delete.

There are some actions that are not allowed by the application:
1. Create or edit a Feature with the same name as another Feature;
2. Create or edit a Service with the same method and endpoint used by another service;
3. Create or edit a Service with an invalid endpoint structure;
