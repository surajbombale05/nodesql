const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Routes
app.post('/users', userController.addUser);      
app.get('/users', userController.getUsers);    
app.put('/users/:id', userController.updateUser); 
app.delete('/users/:id', userController.deleteUser);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
