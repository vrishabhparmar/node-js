# Node JS 

## Foundation

- Build command

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

`Node.js`

