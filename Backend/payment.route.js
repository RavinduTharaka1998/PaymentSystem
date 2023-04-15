const express = require('express');
const paymentRoutes = express.Router();


let Customers = require('./customer.model');

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

// businessRoutes.route('/:id').get(function (req, res){
//     let email = req.params.id;
//     console.log(email);
//     Customers.findOne({$and:[{email : email}]},function (err,cus){
//         if(err)
//             console.log(err);
//         else{
//             res.json(cus)
//         }
//     });

// });

// businessRoutes.route('/edit/:id').get(function (req,res){
//     let id = req.params.id;
//     Customers.findById(id, function (err,customers){
//         res.json(customers);
//     });
// });

// businessRoutes.route('/update/:id').post(function (req,res){
//     let id = req.params.id;
//     Customers.findById(id, function (err, customers){
//         if(!customers)
//             res.status(404).send("Data is not found??");
//         else{
//             customers.name = req.body.name;
//             customers.address = req.body.address;
//             customers.nic = req.body.nic;
//             customers.phone = req.body.phone;
//             customers.customer_type = req.body.customer_type;
//             customers.email = req.body.email;
//             customers.password = req.body.password;


//             customers.save().then(business => {
//                 res.json('Update Complete');
//             })
//                 .catch(err =>{
//                     res.status(400).send("Unable to update data");
//                 });
//         }
//     });
// });

// businessRoutes.route('/delete/:id').get(function(req,res){
//     Customers.findByIdAndRemove({_id:req.params.id}, function (err, customers){
//         if(err)res.json(err);

//         else res.json('Successfully Removed');
//     });
// });



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

module.exports = paymentRoutes;