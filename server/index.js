const ManagerFs = require('./functions/archives');

const startServer = ()=>{
    const express = require('express');
    const app = express();
    const port = 3000;

    app.use(express.static('public'))

    app.get('/', (req, res) => {
        res.send(ManagerFs(req.query('local')))
    });

    app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    });
}
module.exports = startServer