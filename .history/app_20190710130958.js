const express = require('express');
const path = require('path');
const app = express();

//Serving 
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

//SERVER
const port  = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server is runing on port ${port}`)
})