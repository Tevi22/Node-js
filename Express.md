## Why Express ##

Express is a layer built on Node.js which helps us to manage our web server and routes. Since Express is built on top of Node.js, it is a perfect framework for performing high-speed input and output operations.

**Advantages of using Express:**

*Has Robust API's which will help us to easily configure routes for sending and receiving the data between browser and database.
*Takes less time and fewer lines of code thereby simplifying the application development and making it simple to write safe and modular applications.
*Have been used in organizations in different domains like business, finance, news, social, etc.

####
## What is Express ##

Express is a popular server-side framework for Node.js, designed to streamline code development. It offers a set of APIs that extend Node.js and are easy to use. With Express, developers can:

1. *Implement Request Handlers Easily:*

*Express makes it straightforward to handle requests for different URL paths.

2. *Use Template Engines Efficiently:*

*It supports template engines like Pug and Stylus, allowing developers to generate views quickly for specific responses.

3. *Apply Cross-Cutting Concerns Easily:*

*Middleware concepts in Express enable the addition of cross-cutting concerns such as logging and authentication effortlessly.

**Express Framework Features:**

*Minimal: Provides essential features for a web framework.

*Lightweight: Robust enough to support applications of varying complexity, from simple to complex or hybrid.

*Flexible: Utilizes middleware, which are pluggable JavaScript components, for implementing different functionalities.

*Powerful: Offers complete access to the core Node.js APIs, providing a robust foundation.

*Unopinionated: Allows developers full flexibility in server-side operations, with no restrictions on the number of files or directory structure imposed by the framework.

## Express in web application stack ##

Express places itself on the server side in the complete application stack and provides a complete server-side solution for application development. Express works well with any client-side technology like Angular, React, etc. and any database like MongoDB, or MySQL can be used.

**Web Application Stack**

1. Client-side Teechnologies

Browser
*HTML
*CSS
*JS
*Angular
*React

2. Server-side Technologies

*Node.js
*Express

3. Databases

*MySQL
*MongoDB
*Apache Derby

## Developing an Express application on a local machine ##

A development environment with the installation of the below packages are to be set up.

*Node.js
*Express
*Express application generator (optional)

*Step 1:*

Installation of Express is straightforward if you have Node.js installed on your machine. Express can be installed using the node package manager (npm).

Note: We must set the proxy in the Infosys network for npm to work. 

npm config set registry https://infyartifactory.ad.infosys.com/artifactory/api/npm/npm

Now install Express using the following command:

**npm install express**

*Step 2:*

Express provides a scaffolding tool called express-generator which helps to quickly generate an Express application with typical support for routes. The express-generator tool helps in generating the application skeleton which can be later populated with site-specific routes, templates, and database calls.

For installing the express-generator tool globally, use the following command.

**npm install express-generator -g**

Once the generator is installed, it is extremely simple to create the application using the 'express' command. To generate a new Express application, use the "express" command, and specify a new application name as shown below.

**express <<application_name>>**

The express application generator allows us to configure any template engine and any CSS stylesheet engine while creating a new Express application. To specify any template engine use --view and a CSS generation engine can be specified using --css.

The below command sets 'Pug' as the template engine and 'Stylus' as the CSS generation engine.

**express --view=pug --css=stylus <<application_name>>**

It will automatically generate a folder with the supplied application name. Inside the folder, there will be a set of folders and files which are created by the generator tool.

***Folder Description:***

*bin: Contains the configuration file for the environment.
*public: Contains the static files which we can use in the application.
*routes: Contains all the routes created in the application.
*views: Contains the view templates, default jade template files.
*app.js: Contains application-level configurations and the starting point of the application.
*package.json: The package.json file is usually present in the root directory of a Node.js project. This file helps npm to identify the project and handle its dependencies. It consists of other metadata, vital to end-users, such as the description of the project, its version, license information, other configuration data, etc.