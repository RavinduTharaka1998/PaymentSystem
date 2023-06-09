const express = require('express');
const paymentRoutes = express.Router();


let Customers = require('./customer.model');
let Payments = require('./payment.model');

paymentRoutes.route('/cusadd').post(function (req,res){
    let customers = new Customers(req.body);
    customers.save()
        .then(customers => {
            res.status(200).json({'customer' : 'customer is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

paymentRoutes.route('/:id').get(function (req, res){
    let email = req.params.id;
    console.log(email);
    Customers.findOne({$and:[{email : email}]},function (err,cus){
        if(err)
            console.log(err);
        else{
            res.json(cus)
        }
    });

});

paymentRoutes.route('/cusedit/:id').get(function (req,res){
    let id = req.params.id;
    Customers.findById(id, function (err,customers){
        res.json(customers);
    });
});

paymentRoutes.route('/cusupdate/:id').post(function (req,res){
    let id = req.params.id;
    console.log("Edit id " +id)
    Customers.findById(id, function (err, customers){
        if(!customers)
            res.status(404).send("Data is not found??");
        else{
            customers.name = req.body.name;
            customers.email = req.body.email;
            customers.dob = req.body.dob;
            customers.gender = req.body.gender;
            customers.city = req.body.city;
            customers.phone = req.body.phone;
            customers.password = req.body.password;


            customers.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

paymentRoutes.route('/cusdelete/:id').get(function(req,res){
    Customers.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});



paymentRoutes.route('/cuslogin').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    let customers = new Customers(req.body);

    Customers.findOne({$and:[{email : email},{password : password}]})
        .then(customers => {
            if(customers){
                customers.name = req.body.name;
                res.status(200).send({

                    message: "Successful Login"
                });
            }
            else{
                res.status(200).send({
                    message: "User Not Found"
                });
            }
        })
});

paymentRoutes.route('/cusaddpayment').post(function (req,res){
    let payments = new Payments(req.body);
    payments.save()
        .then(payments => {
            res.status(200).json({'payment' : 'payments is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

paymentRoutes.route('/cusgetpayment/:id').get(function (req, res){
    let email = req.params.id;
    console.log("Get Payment Details Email : " +email);
    Payments.find({$and:[{email : email}]},function (err,cus){
        if(err)
            console.log(err);
        else{
            res.json(cus)
        }
    });

});

paymentRoutes.route('/cuseditpayment/:id').get(function (req,res){
    let id = req.params.id;
    Payments.findById(id, function (err,payment){
        res.json(payment);
    });
});

paymentRoutes.route('/cusupdatepayment/:id').post(function (req,res){
    let id = req.params.id;
    console.log("Edit id " +id)
    Payments.findById(id, function (err, payments){
        if(!payments)
            res.status(404).send("Data is not found??");
        else{
            payments.fname = req.body.fname;
            payments.lname = req.body.lname;
            payments.email = req.body.email;
            payments.amount = req.body.amount;
            payments.cardnumber = req.body.cardnumber;
            payments.date = req.body.date;
            payments.cvv = req.body.cvv;
            payments.status = "Pendding";


            payments.save().then(payments => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

paymentRoutes.route('/cusdeletepayment/:id').get(function(req,res){
    Payments.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

paymentRoutes.route('/cusgetsearchpayment/:pathParam1?/:pathParam2?').get(function (req, res){
    let search = req.params.pathParam1;
    let email = req.params.pathParam2;
    console.log("your search is "+search);
    console.log("your email is "+email);
   
    Payments.find({$and:[{$or: [{date: search}, {amount: search}]},{email: email}]},function (err,pay){ 
   
        if(err)
            console.log(err);
        else{
            res.json(pay)
        }
    });
});


paymentRoutes.route('/').get(function (req,res){
    console.log("Get All Payments");
    Payments.find(function (err,payments){
        res.json(payments);
    });
});


paymentRoutes.route('/adminapprovepayment/:id').get(function (req,res){
 
    let id = req.params.id;
    console.log("change payment id : "+id)
    Payments.findById(id, function (err, payments){
        if(!payments)
            res.status(404).send("Data is not found??");
        else{
            payments.status = "Done";

            payments.save().then(payments => {
                res.json('Update Completed');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


module.exports = paymentRoutes;