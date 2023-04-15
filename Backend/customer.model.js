const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Customers = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    dob: {
        type: String
    },
    gender: {
        type: String
    },
    city: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collation: 'customers'
});

module.exports = mongoose.model('Customers',Customers);