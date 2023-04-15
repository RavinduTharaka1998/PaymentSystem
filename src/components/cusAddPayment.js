import  React, {Component} from 'react';
import axios from 'axios'

import './css/cusProfile.css';


export default  class CusAddPayment extends  Component{


    constructor(props) {
        super(props);
        this.state = {customers : []};
        this.state.Email = this.props.match.params.id;

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);

        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCVV = this.onChangeCVV.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fname: '',
            lname:'',
            email: '',
            amount:'',
            cardnumber:'',
            date:'',
            cvv:'',
            status:''
        }
    }
    onChangeFirstName(e){
        this.setState( {
           fname: e.target.value
        });
    }
    onChangeLastName(e){
        this.setState( {
           lname: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState( {
           email: e.target.value
        });
    }
    onChangeAmount(e){
        this.setState( {
           amount: e.target.value
        });
    }
    onChangeCardNumber(e){
        this.setState( {
            cardnumber: e.target.value
        });
    }
    onChangeDate(e){
        this.setState( {
            date: e.target.value
        });
    }
    onChangeCVV(e){
        this.setState( {
            cvv: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        this.state.status = 'Pendding';
        this.state.email = this.props.match.params.id;
        const obj = {
            fname : this.state.fname,
            lname : this.state.lname,
            email : this.state.email,
            amount : this.state.amount,
            cardnumber : this.state.cardnumber,
            date : this.state.date,
            cvv : this.state.cvv,
            status : this.state.status
        };
       
        alert ("Your Email is : "+this.state.email);
        if(this.state.amount > 0 ){
                            axios.post('http://localhost:4000/payment/cusaddpayment',obj)
                                .then(res => {
                                    alert("Registration Successfully");
                                    this.setState({
                                        fname: '',
                                        lname:'',
                                        email: '',
                                        amount:'',
                                        cardnumber:'',
                                        date:'',
                                        cvv:''
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/viewpayment/'+this.props.match.params.id);
               
        }else{
            alert('Enter Valide Payment Amount...');
        }

    }

    render() {
        return(
                <div>
                     <div class="sidebar">
                        <br/>
                        <center>
                           <img src = "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" width="100"/>
                           <br/>
                           <h6>{this.props.match.params.id}</h6>
                        </center>
                        
                        <a href= {"/profile/" +this.props.match.params.id}>Profile</a>
                        <a href={"/myorder/" +this.props.match.params.id}>Reserved Rooms</a>
                        <a href="/about">Booked Vehicle</a>
                        <a href="/contact">Event & Outdor Activity</a>
                        <a href="/contact">Destination</a>
                        <a href="/contact">Booked Tour Guides</a>
                        <a href="/contact">Insurance</a>
                        <a href={"/addpayment/"+this.props.match.params.id}>Payment</a>
                        <a href="/">SignOut</a>
                    </div>

                    <div class="content">

                        <br/>
                        <h3 align="center">Customer Payment Form</h3>
                       
                        <br/> <br/> <br/>
                        <div className="container" style={{marginLeft:300}}>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">First Name</label>
                                <input type="text" class="form-control" value={this.state.fname} onChange = {this.onChangeFirstName}/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Last Name</label>
                                <input type="text" class="form-control" value={this.state.lname} onChange = {this.onChangeLastName}/>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" value={this.props.match.params.id} onChange = {this.onChangeEmail} readOnly/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Amount</label>
                                <input type="number" class="form-control" value={this.state.amount} onChange = {this.onChangeAmount}/>
                                </div>
                            </div>
                            
                            <br/>
                            <h4 style={{color:'blue'}}>Enter Credit Card Details</h4>
                            <br/>

                            <div class="form-group">
                                <label for="inputAddress">Card Number</label>
                                <input type="number" class="form-control" value={this.state.cardnumber} onChange = {this.onChangeCardNumber}/>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">End Date</label>
                                <input type="date" class="form-control" value={this.state.date} onChange = {this.onChangeDate}/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4">CVV</label>
                                <input type="number" class="form-control" value={this.state.cvv} onChange = {this.onChangeCVV}/>
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Pay</button>
                            </form>

                            <br/>
                            <a href = {"/viewpayment/"+this.props.match.params.id} class="btn btn-success">View Payment</a>
                        </div>
                        
                    </div>
                </div>
        );
    }
}