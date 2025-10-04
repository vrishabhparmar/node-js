# Node JS 

## Foundation

Build command

    npm init 

This command is used to build the project we can also use  `npm init -y` which will answer yes to all 
the questions

This command will quicky initialize a new Node JS project by generating a <package.json> file 


```Json
{
  "name": "js",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```
this file <package.json> is essential as it manages the project dependecies, scipts, versioning and other critical configuration. 

while `npm init -y ` creates a basic `package.json` file, it is common to modify the file later to add specific details like custome project name, author information, dependencies using 

    npm install --save


### Simple REST api

#### Introduction

`Node.js` is a runtime environment that allows executing JavaScript on the server side, built on Google's V8 engine. It enables building scalable, event-driven applications using JavaScript beyond the browser.

`Express.js` is a web application framework built on top of Node.js. It simplifies creating web servers, APIs, and applications by providing built-in features like routing, middleware, and request handling.

#### Key Differences

1. Nature

`Node.js` Runtime platform for server-side Javascript execution
`Express.js` Frameword that runs on Node.js to streamline web developement

2. Features

`Node.js` Provides core modules (e.g. `http`, `fs`) but lacks built-in routing or middleware

`Express.js` Adds routing, middleware support, template enginem and simplified `HTTP` utilites

3. Development speed

`Node.js` requires mode manual setup whereas `Express.js` reduces coding time offering structured solutions 
for common tasks. 

4. Use Cases

`Nodejs` is for lowlevel applications like file processin, streaminf or custom servers while `ExpressJS` is for building web apps, REST APIs, or any projects needing organized routing and middleware.


### Packages Used:

#### dotenv

1. Purpose 

Loads environment variables from a `.env` file into `process.env`.

Helps manage configuration settings (e.g., API keys, database URLs) without hardcoding them

2. Security Benefits

Keeps sensitive data (like passwords and keys) out of the source code.

Prevents accidental exposure by excluding `.env` from version control using `.gitignore`

3. Environment Management

Supports different environments (development, production, etc.) using files like `.env.development`, `.env.production.`

Use `NODE_ENV` to dynamically load the correct configuration


#### MongoDB Driver vs Mongoose

This guide explains the key differences between using the **official MongoDB Node.js driver (`mongodb@6.20`)** and **Mongoose**, helping you choose the right one for your project.

---

1. MongoDB Node.js Driver (`mongodb@6.20`)

The official **low-level driver** that allows direct communication with MongoDB.  
It provides complete control over queries, aggregation, and performance optimizations.

Example Usage
```js
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();

const db = client.db("testdb");
const users = db.collection("users");

await users.insertOne({ name: "Vrishabh", age: 25 });
const data = await users.findOne({ name: "Vrishabh" });
console.log(data);








