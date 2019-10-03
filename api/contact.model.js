const mongoose = require('mongoose');
const contact = mongoose.Schema({
    name: {
        type: String
    },
    number: {
        type: Number
    }
},
    {
        collection: 'contacts'
    });

module.exports = mongoose.model('Contact', contact);
