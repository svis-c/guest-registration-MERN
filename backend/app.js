const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

// mongoDB model
const GuestList = require('./models/guestModel.js');

//middlewares
app.use(cors());

// Connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log('- Connected to mongoDB');

    //start server
    app.listen(PORT, () => console.log(`-- Starting server at port: ${PORT}`));
  })
  .catch((err) => {
    console.log('- Error: ' + err);

    process.exit(1);
  });

// ROUTES
app.get('/', (req, res) => res.send('API is running...'));

// - GET
app.get('/api/guestlist', (req, res) => {
  GuestList.find({}).then((result) => res.json(result));
});


// - POST
//adds new guest to guest list

app.post('/api/guestlist', (req, res) => {
  const guestData = req.body; //guest from frontend

  //saving new guest to GuestList model
  const guest = new GuestList(guestData);

  guest
    .save()
    .then((result) => res.send({ message: 'Guest saved' }))
    .catch((err) =>
      res.send({ message: 'Guest not saved, please try again later' })
    );
});

//PUT
//update guest from list
app.put('/api/guestlist/:id', (req, res) => {
  const guestId = req.params.id;

  const updatedGuest = req.body;
  GuestList.findByIdAndUpdate(guestId, updatedGuest)
    .then((result) => res.json({ message: 'Guest updated' }))
    .catch((err) => res.json({ message: 'Guest not updated' }));
});

//DELETE
//-- delete single movie
app.delete('/api/guestlist/:id', (req, res) => {
  const guestId = req.params.id;
  GuestList.findByIdAndDelete(guestId)
    .then((result) => res.json({ message: 'Guest deleted' }))
    .catch((err) =>
      res.send({ message: 'Guest not deleted, try again later' })
    );
});
