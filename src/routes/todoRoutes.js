const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// Create a new Todo
router.post('/todos', async (req, res) => {
    const newTodo = new Todo({
        description: req.body.description,
    });
    try {
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all Todos
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a Todo
router.put('/todos/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status, description: req.body.description },
            { new: true }
        );
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a Todo
router.delete('/todos/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.json(deletedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
