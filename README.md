# Node-Lizard-Spock

<p>This is a full stack example of Rock-Paper-Scissors-Lizard-Spock in NodeJS<p>

## INSTALL

### Prerequisites

<p>An instance of Node and MySQL is required.</p>

### Getting the code and installing

1) Clone and run npm install:
```
git clone https://github.com/nuntius-rex/Node-Lizard-Spock.git
npm install
```
2) Create a database called lizard-spock in MySQL using the MySQL command line or a MySQL client.

3) Run the lizard-spock.sql script located in _admin on the new database to create the needed tables.

4) In the file libs/config/database.js change the connection settings to match your database:
```
const dbConfig = {
    user: "YOUR_USERNAME",
    password: "YOUR_PASSWORD",
    database: "lizard-spock",
    host: "localhost",
    connectionLimit: 10
}
```
5) Run http://localhost:3000 in your browser.

## Development Choices

<p>When one studies the dependencies I have used in package.json you will see the following:</p>

```
"dependencies": {
  "express": "^4.16.3",
  "express-es6-template-engine": "^2.2.3",
  "promise-mysql": "^4.1.3"
},
"devDependencies": {
  "mvccreate": "*",
  "nodemon": "^2.0.4"
}
```

<p>I am intentionally minimalistic, as I favor the philosophy of "run only what is needed" as opposed to "run everything, in case you need it." I have found that this serves me well, as less, and more concise code, means it is easier to diagnose problems. From time to time you are asked to just "get it done" which is fine, but if you have a quick, concise methodology, you will get there quicker, in the long run. Moreover, in contrast, being minimalistic does not mean I like to "reinvent the wheel." I also believe in using the right tool for the job. <p>

>Development: For dev I create the MVC structure with MVC Create (my own tool), and then use nodemon during development to save time restarting the server.

>General Dependencies: I use Express in this case because of it's advanced routing capabilities which provides a lot of flexibility. For templating, I use 'express-es6-template-engine' as I enjoy that it is not some new templating language, but ES6 syntax. I chose 'promise-mysql' as I have found it to be more reliable than the standard mysql library in Node when developing full-stack solutions. This is primarily because you have the ability to wait on database processes to complete and not interfere with game processing.

>Front-End: I used bootstrap and jQuery to quickly get rolling.  
