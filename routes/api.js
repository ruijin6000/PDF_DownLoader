const fs = require('fs');
const path = require('path');

module.exports = app => {

    app.get('/api/folders', (req, res) => {
        console.log(req.body.Dir1);

        const directoryPath = path.join(__dirname, '../', req.body.Dir1,req.body.Dir2);

         fs.readdir(directoryPath,  function (err, files) {
            if (err) {
                console.log('Unable to scan directory: ' + err);
                return  res.status(404).send(err);
            }
             return res.status(200).send(files);
        });

         // res.sendFile(path.resolve(__dirname, '../', 'data', 'Folder1','temp3.pdf'))
    });

    app.get('/api/file', (req, res) => {
        console.log(req.body.Dir1);

        const directoryPath = path.join(__dirname, '../', req.body.Dir1,req.body.Dir2);

       res.sendFile(path.resolve(__dirname, '../', 'data', 'Folder1','temp3.pdf'))
    });
}
