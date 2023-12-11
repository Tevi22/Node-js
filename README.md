# Node-js

## Why Node.js ##

Node is the N in the MEAN stack. In this stack, Node is used along with the MongoDB database, and Express is a Node framework for back-end application development. The Angular framework is used for front-end application development.Node is the N in the MERN stack as well. Here, Node is used along with MongoDB database and Express for back-end application development. React is used for front-end application development in this stack.

**Benefit of Node.js**

1. Very fast: Node applications have better performance than applications developed using other technologies due to the internal JavaScript engine in Node. The engine converts JavaScript code into machine code and provides high-speed execution.

2. Node is powerful: Node uses a non-blocking I/O model and asynchronous programming paradigm, which helps in processing requests in a non-blocking way.
Data Streaming: Node has a built-in Streams API that helps create applications where data streaming is required. 

3. Rich Ecosystem: Node.js provides a package manager called NPM (Node Package Manager), the world's largest software registry that helps open-source developers to share and use packages using NPM.

4. Modularity: Node applications can be developed as modules which helps in dividing the application into a reusable set of code.
Wide client-side and database connectivity: Node.js has no dependencies and goes perfectly with any possible client-side technologies like Angular, React, etc., and any database like MySQL or MongoDB.

The nature of Node.js and its benefits have helped it grab a lot of attention from various organizations across different domains. 

## What is Node.js ##
Node.js is an open-source JavaScript run-time environment used for building scalable network applications. It helps in developing the server-side of the application using JavaScript language. It is used for building data-intensive real-time applications.

###  What can we build using Node.js? ###

1. Complex SPA(Single Page Applications) 
2. Real-time applications like Chat rooms  
Data streaming applications  
3. REST APIs  
4. Server-side web applications

**Features of Node.js**

1. V8 engine

As application development in Node uses JavaScript language, the Node.js platform needs an engine for executing JavaScript. The engine used in the platform is V8 an open-source, high-performance engine. It is developed by Google and written in C++. V8 compiles JavaScript source code into native machine code. The same engine is used in the Google Chrome browser as well to execute JavaScript code. The performance of the Node.js application is faster due to this ultra-fast engine used in the platform.

2. Single codebase

Since coding in Node is based on JavaScript, both the client and the server-side code can be written using the same JavaScript language. It allows the front-end and back-end teams to be combined into a single unit. Also, since Node.js uses JavaScript, we can quickly manipulate the JSON data retrieved from external web API sources like MongoDB, hence reducing the processing time needed per request.

3. Asynchronous and event-driven

All the APIs in Node are asynchronous i.e., non-blocking, which means a Node-based server will never wait for an API to return data or to complete the request, it will move to the next request process. The notification mechanism of Node.js helps in getting the response from the previous requests after their completion.

Let us now understand the Asynchronous programming in Node.js.

Executing JavaScript code can happen in a Synchronous or Asynchronous way.

Synchronous programming
In Synchronous programming, the code execution happens synchronously. This allows only one task to execute at a time.

Consider the scenario where we need to read the content of a file, and then a database operation is to be executed. When the file read operation is started, the rest of the code in the program gets blocked until the file reading operation is finished. Once the file reading is done, it continues executing the remaining code. Though the database operation code is not dependent on the file read operation, it is blocked. This kind of code is considered blocking code or synchronous code.

Asynchronous programming
Asynchronous programming is a design pattern that ensures code execution in a non-blocking way. The asynchronous code will get executed without affecting other code execution. This allows multiple tasks to happen at the same time.

Consider the same scenario of reading a file, and then database operation is to be executed. On asynchronously implementing this, when the file read operation is started, it will not wait for the read operation to complete. It will just continue the execution of the rest of the code. Once the file reading is done, it will be informed, and the corresponding function gets called. This provides a non-blocking way of executing the code.

This improves system efficiency and throughput.

In Node.js, asynchronous programming is implemented using the callback functions.

Callback function: One approach to asynchronous programming is through callback functions. A callback is a function passed as an argument to another part, and it will be executed after the task gets completed. It helps in non-blocking code execution.

setTimeout(() => {
  console.log("after 20 seconds");
}, 20000);
In the above example, setTimeout() takes two arguments. The first argument is the callback function, and the second argument is the delay in milliseconds. The callback function is called after 20 seconds.

In Node.js, at the completion of each task, the respective callbacks written get invoked. All the APIs of Node.js are written in a way to support callbacks. This makes Node.js highly scalable as it can handle a large number of requests in a non-blocking way.

4. Single-threaded event loop model 

Node.js is said to be highly scalable because it handles the client request using the Single-threaded model with an event loop. Node environment follows the Single Threaded Event Loop Model, which is based on JavaScript's callback mechanism.

5. Scalability

One of the reasons for the Node.js application scalability is that it makes use of event-driven programming with the Single Threaded Event Loop Mechanism. This enables the Node application to serve a huge number of incoming requests concurrently and it scales up automatically to serve those requests efficiently.

Companies like eBay and Walmart makes use of Node.js to scale up their application to support multiple external services and handle the requests flowing in with those services.

6. I/O bound operations

Due to its asynchronous/non-blocking nature, Node.js can be used to create I/O bound applications that involve huge input-output operations, such as creating real-time applications that have real-time data flowing in. Applications like Facebook, online chat applications, and Twitter are a few examples.

An online marketing company like eBay makes use of Node.js to handle lots of I/O-bound operations to handle eBay-specific services that display information on the page.                  

7. Streaming of data

Node.js can be used to create data streaming applications that involve streaming the data quickly. Node.js has a built-in Stream API available using which we can stream the data very fast. Applications like the Twitter stream, video stream, etc. use this feature.

Media companies like National Public Radio, Direct TV, and HBO makes use of Node.js to stream the data to their viewers.

8. Modularity

Node.js supports modular JavaScript. Instead of writing code in a single JavaScript file, the code can be written in modules which can then be accessed at multiple places in the application. This helps in the easy maintenance and reusability of the code.                             


*Single-threaded event loop model processing steps:*

Step 1:   Assume 'n' number of clients, and send requests to the webserver to access the web application concurrently.

Node web server receives those requests and places them into a queue known as "Event Queue". The Node web server internally maintains a limited thread pool to provide service to the client. Let us assume that 'm' number of threads can be created and maintained.

Step 2:   The Node web server internally has a component known as "Event Loop." It uses the indefinite loop to receive requests and process them. But the Event loop component uses a "Single Thread" to process the requests.

Step 3:  The event Loop component checks for any client request that is placed in the Event Queue. If no requests are present, then it waits for incoming requests. If the requests are present, then it picks up one client request from the Event Queue and starts processing that request.

Step 4:  If that client request does not require any blocking I/O operations, then the request is processed till completion, and the response is sent back to the client.

Step 5.1:  If the client request requires some blocking I/O operations like file operations, database interactions, and any external services then it checks the availability of threads from the internal thread pool.

Step 5.2:  One thread is assigned from the internal pool of threads and assigned to the client's request. That thread is responsible for taking that request, processing it, and performing blocking I/O operations. After assigning the current request to the thread, the event loop continues with next request execution present in the event queue.

Step 6: After the thread processing the I/O bound request, the response is prepared and sent back to the Event Loop. Event Loop then sends that response back to the requested client.

**Whare to Use Node.js and wherenot to?**

1. Node.js should not be preferred for creating applications that involve CPU-intensive operations. If an application involves a lot of calculations that require a CPU for processing, is not fit for Node.js.
2. Node.js shines well for applications that involve lots of I/O bound operations.

**Node.js in the web application stack**

Node.js places itself on the server side in the complete web application stack and provides a complete server-side solution for application development. Node.js works well with any client-side technology like Angular, React, etc. and any database like MongoDB, MySQL, etc. can be used for data storage.

*Client-Side Tech:*
-Angular
-HTML
-CSS
-JS
-React

*Server-side Tech:*
-Node.js
-Express

*Databases:*
-MySQL
-MongoDB
-Apache Derby

**How to Use Node.js**

JavaScript code executable in Node.js
-Any js file that doesn't contain code for browser interactions will execute successfully using node platform

*Example*

document.write("My First Node.js program");
-This is code for browser execution and will result in error on node platform.

console.log("My First Node.js program");
-This code will execute in the terminal and works with node platform.

**Modularizing Node application**

-Modularization is a software design technique in which the functionality of a program is separated into independent modules, such that each module contains the desired functionality.

*Advantages of modularization:*

-Readability: Modular code highly organizes the program based on its functionality. This allows the developers to understand what each piece of code does in the application.
-Easier to debug: When debugging large programs, it is difficult to detect bugs. If a program is modular, then each module is discrete, so each module can be debugged easily by the programmer.
-Reusable Code: Modular code allows programmers to easily reuse code to implement the same functionality in a different program. If the code is not organized modularly into discrete parts, then code reusability is not possible.
-Reliability: Modular code will be easier to read. Hence it will be easier to debug and maintain the code which ensures smoother execution with minimum errors.

## File system module ##

One of the important operations in server-side programming is to be able to read or write the content of a file. Node.js comes with the file system (fs) module fs to perform file operations. It provides many useful functionalities to interact with the file system. 

**What is the fs module?**
The fs module provides a wrapper that contains the standard file operations for manipulating files and dealing with the computing platform's file system.

**How to use the fs module?**
To include the File System module, use the require() method:

Syntax:

const fs = require('fs');
Once imported, we can use different methods provided by this module for doing any file manipulations.

## File Operation ##

*Writing data to a file*

The File System module has the following methods for creating a new file and writing data to that file:

1. writeFile()
2. appendFile()

The fs.writeFile() method will overwrite the content if the content already exists. 

If the file does not exist, then a new file will be created with the specified name and content.

Syntax:

fs.writeFile(file, data, callback)

1. file: Placeholder to give the file name in which you are going to write the data.
2. data: The data/content must be written to the file.
3. callback: The callback method, that will be executed, when 'writeFile()' function is executed. This callback will be executed in both success as well as failure scenarios.

*Writing data to a file – Async/Await*

**Method 1**

Before Node.js v8, If we want to avoid callbacks, we have to manually promisify the fs.writeFile function.

Let's manually promisify and wrap it in a function:

//Method 1
// promisifing writeFile method
const fs = require('fs');
const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file');
      resolve('success');
    });
  });
};
//Invoking the promise which we have created. Self-invocation function
(async () => {
  try {
    await writeFilePromise('myData.txt', `Hey @ ${new Date()}`);
    console.log('File created successfully with promisify and async/await!');
  } catch (err) {
    console.log(err);
  }
})();

**Method 2**

In the latest versions of Node.js, 'util.promisify()' will allow us to convert I/O functions that return callbacks into I/O functions that return promises.

// Method 2
const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
(async () => {
  try {
    await writeFile('myData.txt', `Hey @ ${new Date()}`);
    console.log('File created successfully with promisify and async/await!');
  } catch (err) {
    console.log(err);
  }
})();

*Appending data to a file*

The appendFile() method first checks if the file exists or not. If the file does not exist, then it creates a new file with the content, else it appends the given content to the existing file.

Syntax:

fs.appendFile(path, data, callback)

1. path: Placeholder to give the file name in which you are going to append the data.
2. data: The data/content which must be appended to the file.
3. callback: The callback method, that will be executed, when 'appendFile()' function is executed. This callback will be executed in both success as well as failure scenarios.

*Reading data from a file*

The fs.readFile() method is used to read the content from a given file.

Syntax:

fs.readFile(path, encoding, callback);

1. path: Path where the file with data/content resides, with respect to the root folder.
2. encoding: an optional parameter that specifies the type of encoding to read the file. Possible encodings are 'ascii', 'utf8', and 'base64'. If no encoding is provided, the default is utf8.
3. callback: The callback method, that will be executed, when readFile() function is executed.