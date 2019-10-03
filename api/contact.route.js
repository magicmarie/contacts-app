const express = require('express');
const contactRoutes = express.Router();

let Contact = require('./contact.model');

// Defined store route
contactRoutes.route('/add').post(function (req, res) {
  let contact = new Contact(req.body);
  contact.save()
    .then(() => {
      res.status(200).json({'contact': 'contact created successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
contactRoutes.route('/').get(function (req, res) {
    Contact.find(function(err, contacts){
    if(err){
      res.json(err);
    }
    else {
      res.json(contacts);
    }
  });
});

// Defined edit route
contactRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Contact.findById(id, function (err, contact){
      if(err) {
        res.json(err);
      }
      res.json(contact);
  });
});

//  Defined update route
contactRoutes.route('/update/:id').post(function (req, res) {
    Contact.findById(req.params.id, function(err, contact) {
    if (!contact)
      res.status(404).send("data is not found");
    else {
        contact.name = req.body.name;
        contact.number = req.body.number;
        contact.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
contactRoutes.route('/delete/:id').delete(function (req, res) {
    Contact.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = contactRoutes;
