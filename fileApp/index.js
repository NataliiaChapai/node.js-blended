const express = require('express');
const app = express();
const Friends = require('./Friends')
const path = require('path');

const friendsPath = path.join(__dirname, 'db', 'db.json')
console.log(friendsPath);

app.post('/friends', Friends.save);
app.get('/friends', Friends.getAll);
app.put('/friends/:id', Friends.update);
app.delete('/friends/:id', Friends.remove);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


//CRUD

