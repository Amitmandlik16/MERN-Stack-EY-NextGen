const express = require('express');
const mongoose = require('mongoose');
const Moviemodel = require('./model/Moviemodel');
const cors=require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/addmoviedata', async (req, res) => {  
  try {
    const newData = new Moviemodel(req.body);
    await newData.save();
    console.log(newData)
    res.send('New data saved successfully');
    console.log('New data saved successfully');
  } catch (error) {
    res.send('New data not saved successfully');
    console.log('New data not saved successfully', error);
  }
});

app.get('/getmoviedata', async (req, res) => {  
  try {
    const newData = await Moviemodel.find({});
    res.json(newData);
    console.log(newData);
  } catch (error) {
    res.send('Data not received');
    console.log('Data not received');
  }
});

const dburl = 'mongodb+srv://amit:amit12345@jscluster.hm5au.mongodb.net/movie';
mongoose.connect(dburl)
  .then(() => console.log(`MongoDb database url ${dburl} connected successfully`))
  .catch((error) => console.error('Failed to connect to MongoDB', error));

app.listen(port, () => {
  console.log(`server.js app listening on port (localhost) 127.0.0.1:${port}`);
});
