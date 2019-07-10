const express = require('express');
const path = require
const app = express();



const port  = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server is runing on port ${port}`)
})