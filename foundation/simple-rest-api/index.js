const express = require('express');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express()

app.use(express.json()); // Middleware which allows parseing JSON objects

app.use((err, req, res, next) => {
    console.err(err.stack);
    res.status(500).json({error:'Internal Server Error'});
})

mongoose.connect(process.env.MONGODB_URI, {
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
app.get('/', (req, res) => {
    res.json({
        "msg":"Hello From server"
    })
})

app.get('/tasks', async (req , res) => {
   // const {page = 1, limit = 10, sortBy = 'createdAt', order = 'desc'} = req.query;

   const tasks = await Task.find();

   const total = await Task.countDocuments();
   res.json({tasks})

})

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
})

app.delete('/task/:id', async(req, res) => {

    try{
        console.log('Recieved delete request', req.params.id);
        const task = await Task.findByIdAndDelete(req.params.id);
        
        if(!task) return res.status(404).json({error: 'Task not found'});

        res.json({message: 'Task deleted'});
    }catch(err)
    {
        res.json({err});
    }
    

})

app.put('/task/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true});

    if(!task) return res.status(404).json({erro:'Task not found'});
    res.json({task});
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
















