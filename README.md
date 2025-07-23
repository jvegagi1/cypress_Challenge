# Cypress Base Project 

>This project aims to implement a general guideline and structure easy to follow for all Hugers


## Prerequisites

You need to have previously installed the following tools

[![java](https://img.shields.io/badge/java-v8-yellow.svg)](https://www.oracle.com/java/technologies/downloads/#java8)
[![java](https://img.shields.io/badge/nodejs-v14X-red.svg)](https://nodejs.org/en/download)


## Requirements  
| Name      | Version |  
| --------- | ------- | 
| java | > = 8.x |  
| node | > = 14.x |

## The project directory structure
​
The project is compiled for Node Package Manager and follows the standard directory structure used in most Cypress projects implementing custom commands, DRY and KISS patterns:
```Gherkin
src
  + cypress                               | Location of automation source files                               
    + e2e                                 | Contains all the tests 
    + fixtures                            | .json files to store all isolated data required to execute the tests 
    + support                             | Contains elements, commands and  
        + commands                        | Custom commands that simulate the user interactions                      
        + elements                        | Defined constants that include the DOM locators
        + utilities.js                    | Common functions 
        + e2e.js                          | Class to import all created commands
+ cypress.config.js                       | Global Cyopress configuration. The most important variable here is the baseUrl
+ package.json                            | Node package manager
    
```

### Dependencies Installation

``` bash
npm install
```

### test cases execution

The tests can be executed using 2 methods:

Headless

``` bash
npx cypress run --spec "cypress/e2e/login.cy.js"
``` 

Cypres UI

``` bash
npx cypress open
``` 

### Test Strategy
[Test Strategy here](https://docs.google.com/document/d/1r0d9-cJu64c3z0gZe3PhbJJlwe2ufjY_CktwIKQa0Fs/edit?tab=t.0#heading=h.5fqp4gl32fpy)


>Authors:  
> Raptor Team (Base repo structure) and Julio Andres Vega 
 
