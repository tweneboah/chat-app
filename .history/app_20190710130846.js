const express = require('express');
const path = require('path');
const app = express();



const port  = process.env.PORT || 5000;
const publicDirectoryPath = path.join(__)
app.listen(port, () => {
 console.log(`Server is runing on port ${port}`)
})