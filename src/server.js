const express = require('express');

const app = express();
// Post Requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Routes
app.use('/api', require('./routes/api'));
app.listen(3000,() =>{
    console.log('Server started on the port http://localhost:3000/');
});
