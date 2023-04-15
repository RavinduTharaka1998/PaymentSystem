import  React, {Component} from 'react';
import axios from 'axios'

import './css/cusProfile.css';
import PaymentTableRow from './cusPaymentTableRow';


export default  class CusViewPayment extends  Component{


    constructor(props) {
        super(props);
        this.state = {payments : [], search: ''};
        //this.state.Email = this.props.match.params.id;
       
        this.onChangeSearch = this.onChangeSearch.bind(this);

    }
    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });
    }

    componentDidMount() {
        //alert('email is '+this.props.match.params.id);
        axios.get('http://localhost:4000/payment/cusgetpayment/'+this.props.match.params.id)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({payments : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.payments.map(function (object, i){
            return <PaymentTableRow obj = {object} key = {i}/>;
        });
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
                        <h3 align="center">Payment history</h3>
                        <br/>
                        <from style ={{marginLeft:1100, display:'flex',gap:5}} onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type ="text" required value={this.state.search} onChange = {this.onChangeSearch} className="form-control"/>
                                </div>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/searchpayment/"+this.state.search+"/"+ this.props.match.params.id} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
                                </div>
                        </from>
                        <br/>
                        <table className="table table-striped" style = {{marginLeft :300,width:"70%"}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>
                       
                        
                    </div>
                </div>
        );
    }
}