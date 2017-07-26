var User = require("../models/user")

function index(req, res) {
  User.find()
    .then(function(users) {
      res.json(users);
    },
    function(error) {
      res.status(400).send(error);
    });

}

function create(req, res) {
  console.log(req);

  console.log(req.body);
  console.log(req.params);
  console.log(req.query);

  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });
  console.log("my user", user);

  user.save()
    .then(function(response) {
      res.json(response);
    },
    function(error) {
      res.status(400).json(error);
    });

}

function show(req, res) {
  var id = req.params.id;
  User.findById(id)
    .then(function(user) {
      if (!user) {
        return res.status(404).send();
      }

      res.json(user);
    })
    .catch(function(error) {
      res.status(400).send(error);
    });
}

function update(req, res) {
  var id = req.body._id;

  User.findByIdAndUpdate(id, req.body, {new: true})
    .then(function(user) {
      if (!user) {
        return res.status(404).send();
      }

      res.json(user);
    })
    .catch(function(error) {
      res.status(400).send(error);
    })
}

function destroy(req, res) {
  var id = req.params.id;

  // if (!ObjectID.isValid(id)) {
  //   return res.status(404).send();
  // }
  //
  User.findByIdAndRemove(id)
    .then(function(user) {
      if (!user) {
        return res.status(404).send();
      }

      res.json(user);
    })
    .catch(function(error){
      res.status(400).send(error);
    });
}


module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
