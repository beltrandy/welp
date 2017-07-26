var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

// var {mongoose} = require('./db/mongoose');

var app = express();

// connect to MongoDB with mongoose
require('./db/mongoose.js')

var user = require("./routes/user");
// require place
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.use('/users', user)
// same for place

// // ******* Place controller functions ********
//
// app.post('/places', (req, res) => {
//   var user = new Place({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email
//   });
//
//   Place.save().then((doc) => {
//     res.send(doc);
//   }, e => {
//     res.status(400).send(e);
//   });
// });
//
// app.get('/places', (req, res) => {
//   Place.find().then((places) => {
//     res.send({places});
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });
//
// app.get('/places/:id', (req, res) => {
//   var id = req.params.id;
//
//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }
//
//   Place.findById(id).then((place) => {
//     if (!place) {
//       return res.status(404).send();
//     }
//
//     res.send({place});
//   }).catch((e) => {
//     res.status(400).send();
//   });
// });
//
// app.put('/places/:id', (req, res) => {
//   var id = req.params.id;
//
//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }
//
//   Place.findByIdAndUpdate(id, req.body, {new: true}).then((place) => {
//     if (!place) {
//       return res.status(404).send();
//     }
//
//     res.send({place});
//   }).catch((e) => {
//     res.status(400).send();
//   })
// });
//
// app.delete('/places/:id', (req, res) => {
//   var id = req.params.id;
//
//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }
//
//   Todo.findByIdAndRemove(id).then((place) => {
//     if (!place) {
//       return res.status(404).send();
//     }
//
//     res.send({place});
//   }).catch((e) => {
//     res.status(400).send();
//   });
// });


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
