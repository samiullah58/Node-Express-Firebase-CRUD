const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/router');
const cors = require('cors');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',router);

app.get('/',  (req, res) => {

    res.sendFile(__dirname + '/index.html');
    
    });

app.post('/', (req, res) => {
    if (req.files); {
     console.log(req.files);
     var file = req.files.file;
     var filename = file.name;
     console.log(filename);

      };
    });


app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000!");
})