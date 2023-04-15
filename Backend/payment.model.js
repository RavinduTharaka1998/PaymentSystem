const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Payments = new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    amount: {
        type: String
    },
    cardnumber: {
        type: String
    },
    date: {
        type: String
    },
    cvv: {
        type: String
    },
    status: {
        type: String
    }
}, {
    collation: 'payments'
});

module.exports = mongoose.model('Payments',Payments);