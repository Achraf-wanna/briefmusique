const express = require('express');
var path = require('path');
const app = express();
const Joi = require('joi');
var fs = require('fs');
const data = fs.readFileSync('public/data.json');
var parsedata = JSON.parse(data);
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.json());
app.use(express.static(__dirname + '/public'));





app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '.')});
});



app.get('/artists', (req, res)=>{
  res.sendFile('index.html', {root: path.join(__dirname, '.')});

});




app.post('/artists',urlencodedParser, (req,res)=>{
    const { error } = validatePodcast(req.body); // result.error
    if (error) return res.status(400).send(error.details[0].message);

    const artist = {
        id: parsedata.artists.length +1,
        name: req.body.name,
        album: req.body.album,
        cat: req.body.cat,
        imgg: req.body.imgg

    };

    parsedata.artists.push(artist);
    parsedata  = JSON.stringify(parsedata, null ,2)


    fs.writeFile("public/data.json", parsedata, (err, data)=>{
        if (err) throw err;
        console.log(`Saved to file ${parsedata}`);

    });


    res.sendFile(path.join(__dirname + '/index.html'));

});


function validatePodcast(artist){
    const schema={
        name: Joi.string().min(3).required(),
        album: Joi.string().required(),
        cat: Joi.string().required(),
        
        imgg: Joi.string().required()
    }
    return Joi.validate(artist, schema);
}



app.get('/artists/:id', (req, res)=>{
    const artist = parsedata.artists.find(c => c.id ===parseInt(req.params.id));

    if (!artist)
    return res.status(404).send('The Artist with the given ID was not found ..')
    res.send(artist)
})


app.listen(3000);
