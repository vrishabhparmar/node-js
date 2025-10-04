const express = require('express');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express()

app.use(express.json()); 

mongoose.connect(process.env.MONDODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'));


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model('Task', taskSchema);

// Routes 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
















