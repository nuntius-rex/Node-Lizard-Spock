# Node-Lizard-Spock

<p>This is a full stack example of Rock-Paper-Scissors-Lizard-Spock in NodeJS<p>

<p>I originally created this code example in <a href="https://github.com/nuntius-rex/symfony-lizard-spock">Symfony in 2017</a>. I decided to try a new version in NodeJS.</p>

<p>This version highlights a NodeJS MVC structure with transactional database interactions.</p>

![Preview](/public/img/preview.png?raw=true "Preview")

<a href="http://nodelizardspock-env.eba-gxctmwpy.us-east-1.elasticbeanstalk.com/">Live Demo</a>

## INSTALL

### Prerequisites

<p>An instance of Node and MySQL is required.</p>

### Getting the Code and Installing

1) Clone and run npm install:
```
git clone https://github.com/nuntius-rex/Node-Lizard-Spock.git
cd Node-Lizard-Spock
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

<p>I am intentionally minimalistic, as I favor the philosophy of "run only what is needed" as opposed to "run everything, in case you need it." I have found that this serves me well, as less, and more concise code, means it is easier to maintain and diagnose problems. From time to time you are asked to just "get it done" which is fine, but if you have a quick, concise methodology, you will get there quicker, with sustainability, in the long run. Moreover, I should mention in contrast, being minimalistic does not mean I like to "reinvent the wheel." I also believe in using the right tool for the job. <p>

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

<p>Here is a bit about why I chose these options:</p>

>Development: For dev I create the MVC structure with MVC Create (my own tool), and then use nodemon during development to save time restarting the server.

>General Dependencies: I use Express in this case, because of it's advanced routing and templating support capabilities provide a lot of flexibility and remove a lot of complexity that one might encounter if coding in plain NodeJS. For templating, I use 'express-es6-template-engine' as I enjoy that it is not some new templating language, but elegantly, ES6 syntax. I chose 'promise-mysql' as I have found it to be more reliable than the standard mysql library in Node when developing full-stack solutions. This is primarily because it have the ability to wait on database processes to complete and marries well with Express. In this case, the game processing is actually much faster than the database interactions. Using promises, one can properly wait for results.

>Front-End: I used Bootstrap and jQuery to quickly get rolling. A font-end framework could have been implemented, but for simplicity, and quick development of this project, the two selected were more than adequate.
