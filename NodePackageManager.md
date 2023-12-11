## What is NPM (Node Package Manager)? ##

NPM stands for Node Package Manager which is a collection of all the open-source JavaScript libraries available in this world. It is the world’s largest software registry maintained by the Node.js team. There are many packages available on NPM which can be used in our application development.

**The npm CLI**

NPM provides a command-line interface "npm" to work with the NPM repository, which comes bundled with Node. This tool can be used to install, update, or uninstall any package through NPM.

Note: We must set the proxy in the Infosys network for npm to work. 

npm config set registry https://infyartifactory.ad.infosys.com/artifactory/api/npm

**How to get the packages to be installed in our application?**

To install any NPM package use the below code in the command prompt:

npm install <package_name>[@<version>]

*This will create a folder node_modules in the current directory and put all the packages-related files inside it. Here @version is optional if you don't specify the version, the latest version of the module will be downloaded.

*You can even get tools from NPM like @angular/cli, typescript (compiler), etc.

There are two modes of installation through NPM

1. Global
2. Local

***Global installation***

If we want to globally install any package or tool add -g to the command. On installing any package globally, that package gets added to the PATH so that we can run it from any location on the computer.

npm install -g <package_name>

Consider the scenario where you need to install “nodemon”, which is used to restart the Node application. It can be installed using NPM as below.

npm install -g nodemon

To install any package that is to be available from anywhere on the computer, then better to go for global installation.

***Local installation***

If we do not add -g to your command for installation, the modules get installed locally, within a node_modules folder under the root directory. This is the default mode, as well.

npm install express

To install any application-specific package, get it installed locally.

**Best Practice Tip: Start all projects with npm init. This will create a new package.json for you which allows you to add a bunch of metadata to help others working on the project have the same setup as you.**

**How to update package**

***Global***

npm update -g <package_name>

***Locally***

npm update

**How to uninstall package**

1. npm uninstall <package_name>[@<version>]
2. npm uninstall express@2.1.0

**NPM Alternatives**

-NPM is one of the oldest package managers for Node.js. There are other replacements like YARN that work with the NPM registry.

## Package.json ##

A Node project needs a configuration file named "package.json". It is a file that contains basic information about the project like the package name, and version as well as more information like dependencies which specifies the additional packages required for the project.

To create a package.json file, open the Node command prompt and type the below command.

npm init

Enter values for package name, version, description, and so on. This will generate a package.json file similar to the one shown below:

{
  "name": "mypackage",
  "version": "1.0.0",
  "description": "\"Testing publishing\"",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
} 

-The name and version represent the module name and the version to be used while publishing. 
-The description represents a brief description of the module.
-The property main represents the entry point of the application. 
-The test represents all the test scripts to run. 
-The author represents the author's name and the license represents the license type of the module.

## Publish custom module to NPM-Demo ##

We saw that the NPM repository has a collection of modules that we can download and use in our application. It is also possible to publish the custom modules that we created to NPM so that we can make our modules to be available for others to download.

Let us understand how to publish a custom module to the NPM repository.

**Steps to publish a custom module to NPM:** 

***Step 1: Create a user account using the signup option in npmjs.com or using the npm adduser command from the command prompt as below:***

D:\>npm adduser

***Step 2: Create a package.json file in a folder named mypackage. Specify application configurations in this file.***

{
  "name": "mypackage",
  "version": "1.0.0",
  "description": "Testing publishing",
  "main": "webServer.js",
  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
  "keywords": [
	             "node"
              ],
   "author": "",
  "license": "ISC"
}

***Step 3: Create a module in the same folder inside which the package.json file resides.** 

MyModule.js:

exports.myMethod = function () {
  console.log('Method invoked from a module');
};

***Create another file where MyModule is to be imported and invoke the myMethod() function.***

TestModule.js

const myModule = require('./MyModule');
myModule.myMethod();

***Step 4: Run the code using the Node command and test it.***

D:\mypackage\>node TestModule.js

***Step 5:  Use npm publish command from the command prompt to publish the module to npm:***

D:\mypackage\>npm publish + mypackage@1.0.1

**The package will be published successfully. To use this module from npm, just use the "npm install mypackage" command from the command line and it will get installed.**

## Restarting Node Application ##

Whenever we are working on a Node.js application and we do any change in code after the application is started, we will be required to restart the Node process for changes to reflect. In order to restart the server and watch for any code changes automatically, we can use the Nodemon tool.

**Nodemon**

-Nodemon is a command-line utility that can be executed from the terminal. It provides a different way to start a Node.js application. It watches the application and whenever any change is detected, it restarts the application.
-It is very easy to get started with this tool. To install it in the application, run the below command.

npm install nodemon -g

***Once the 'nodemon' is installed in the machine, the Node.js server code can be executed by replacing the command "node" with "nodemon".***

nodemon app.js

***Thus the 'nodemon' starts the application in watch mode and restarts the application when any change is detected.***

Consider a simple Node.js code for creating a web server.

const http = require("http");
var server = http.createServer((req, res) => {
  res.write("Hello World! I have created my first server!");
  res.end();
});
server.listen(3000);
console.log("Server started... Running on localhost:3000");

Observe the console on starting the nodemon in a command prompt window.

Screenshot displaying Server started... Running on localhost:3000 message after execution of nodemon httpserver.js command

Now open the application code and do changes in the code as below.

const http = require("http");
var server = http.createServer((req, res) => {
  console.log("Request URL is " + req.url);
  res.write("Hello World! I have created my first server!");
  res.end();
});
server.listen(3000);
console.log("Server started... Running on localhost:3000");
Observe the console message in the command prompt. Nodemon automatically restarted the server by observing changes in the code.

Screenshot displaying the console statements automatically. 

 

**Best Practices Tip: Ensure your app automatically restarts**
**To avoid over and over restarting of server for small changes to reflect. It is important to have an automatic restart of the server of your application. Use nodemon for this purpose.**

 
