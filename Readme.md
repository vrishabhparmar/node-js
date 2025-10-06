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

```

## Auth Service

User model with auth service for with signup, login, refresh toke,, protected routes + role based access
using `Node.js + Express + JWT + bcrpt + MongoDB (Mongoose)`

### Packages used

1. JWT 

`JWT` is used to create a compact, URL-safe token that securely transmits user identity and claims between parties, typically the server and client.
 It enables stateless authentication, meaning the server does not need to store session data, which enhances scalability.
 After a user logs in, the server generates a JWT containing user information, signs it with a secret key, and sends it to the client.
 This token is then used to authenticate subsequent requests by verifying its signature and expiration

2. cookie-parser

The `cookie-parser` middleware is necessary to parse HTTP cookies sent by the client. It allows the server to read and manage cookies, such as those storing the JWT, by populating the req.cookies object with a keyed object based on the cookie names.
 This is crucial for handling authentication tokens stored in cookies, as it enables the server to retrieve the token from the client's request headers

3. Bcrypt

Bcrypt is used for securely hashing passwords before storing them in the database.
 Storing passwords in plain text is a significant security risk; bcrypt mitigates this by using a hashing algorithm that is computationally expensive, making brute-force attacks impractical.
 When a user registers or changes their password, bcrypt hashes the password, and during login, it compares the provided password with the stored hash to verify authenticity.
 This ensures that even if the database is compromised, the actual passwords remain protected.

```javascript

PORT=4000
MONGO_URI=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d
COOKIE_SECURE=false

```

1. JWT_ACCESS_SECRET & JWT_REFRESH_SECRET

Cryptographic secrets used to sign JWTs (JSON Web Tokens) for secure authentication.

`JWT_ACCESS_SECRET`: Used for creating and verifying the access token.

`JWT_REFRESH_SECRET`: Used for refresh tokens, which allow clients to obtain new access tokens when the old ones expire.

2. ACCESS_TOKEN_EXPIRES_IN=15m

The lifetime of issued access tokens. JWT access tokens expire after 15 minutes. This limits the window for potential misuse if stolen.

3. REFRESH_TOKEN_EXPIRES_IN=7d

The lifetime of issued refresh tokens. JWT refresh tokens expire after 7 days. They allow users to obtain new access tokens without re-authenticating

4. COOKIE_SECURE=false

Determines if cookies will be marked as "secure". 

`false`: Cookies can be transferred via HTTP and HTTPS (used in development).

`true`: Cookies are only sent over HTTPS (production best practice)

