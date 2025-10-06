const express = require('express')

const route = require('./routes/routes')

require('dotenv').config()

const app = express()

app.use(express.json())




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}` ));

