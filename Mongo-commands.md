## Mongo Commands
---

## 🧠 Basic Concepts
| Term | Description |
|------|--------------|
| **Database** | Container for collections. Similar to a schema in SQL. |
| **Collection** | A group of MongoDB documents (like a table). |
| **Document** | A single record in MongoDB (stored as JSON/BSON). |

---

1. Show Databases

    show dbs

2. Switch Database

    use <database_name>

3. Show collections

    show <collections>

4. Run JavaScript file

    load("myscript.js")

## Collections Commands

1. Show all collections

    show collections

2. create collection

    db.createCollection("users");

3. drop collections

    db.users.drop()

4. Rename Collections

    db.users.renameCollections("customers");


## CRUD operations

1. Inserrt

    db.users.insertOne({ name: "Vrishabh", age: 25})
    
    db.user.insertMany([
        {name:"Yash", age:27},
        {name:"Karan", age: 23}
    ])

2. Read

    db.users.find(); **Get All documents**
    db.users.find().pretty(); **Preety Print results**
    db.users.find({age:25}); **Filter by condition**
    db.users.find({age: {$gt: 20}}); **Preety Print results**
    db.users.findOne({name: "Yash"}); **Preety Print results**

3. Update 

    db.users.updateOne(
        {name: "Vrishabh"},
        {$set: {age:26}}
    );

    db.users.updateMany(
        {age: {$lt: 25}},
        {$inc: {age: 1}}
    );

4. Delete 

    db.users.deleteOne({
        name: "Karan";
    })

    db.users.deleteMany({
        age: {$gt: 30}
    });


## Query Operators

| Operator      | Meaning            | Example                                      |
| ------------- | ------------------ | -------------------------------------------- |
| `$eq`         | Equal              | `{ age: { $eq: 25 } }`                       |
| `$ne`         | Not equal          | `{ age: { $ne: 25 } }`                       |
| `$gt`         | Greater than       | `{ age: { $gt: 20 } }`                       |
| `$lt`         | Less than          | `{ age: { $lt: 30 } }`                       |
| `$in`         | In array           | `{ name: { $in: ["Yash", "Vrishabh"] } }`    |
| `$and`, `$or` | Logical conditions | `{ $or: [ { age: 25 }, { name: "Yash" } ] }` |


## Sorting & Limiting

    db.users.find().sort({ age: 1 });     // Ascending
    db.users.find().sort({ age: -1 });    // Descending
    db.users.find().limit(5);             // Limit results
    db.users.find().skip(10).limit(5);    // Pagination

## Aggregation


## Indexing

    db.users.createIndex({ name: 1 });      // Ascending index
    db.users.createIndex({ age: -1 });      // Descending index
    db.users.getIndexes();                  // Show indexes
    db.users.dropIndex("name_1");           // Drop index

## User & Role Management

    use admin
    db.createUser({
    user: "admin",
    pwd: "securePassword",
    roles: [ { role: "root", db: "admin" } ]
    });

    db.auth("admin", "securePassword");
    show users;


# Backup database
mongodump --db=myDatabase --out=/backup/path

# Restore database
mongorestore --db=myDatabase /backup/path/myDatabase


# Miscellaneous

| Action                  | Command             |
| ----------------------- | ------------------- |
| Check server status     | `db.serverStatus()` |
| Check collection stats  | `db.users.stats()`  |
| Show current operations | `db.currentOp()`    |
| Kill operation          | `db.killOp(opid)`   |

