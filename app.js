const express = require ('express');
const path = require ("path");


const port = process.env.PORT || 80;
const clientPath = path.join(__dirname, 'client')

const app = express();
app.use(express.static(clientPath));


app.listen(port, () => {
    console.log(`Server working on port ${port}`)
})