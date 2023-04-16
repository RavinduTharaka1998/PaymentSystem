import  React, {Component} from 'react';
import axios from 'axios'

import './css/cusProfile.css';
import AdminPaymentTableRow from './adminPaymentTableRow';


export default  class adminHome extends  Component{


    constructor(props) {
        super(props);
        this.state = {payments : []};
    }
    

    // componentDidMount() {
    //     //alert('email is');
    //     axios.get('http://localhost:4000/payment/getpayment')
    //         .then(response => {
    //             // alert('Pass una')
    //             // alert('Data Tika :'+response.data)
    //             this.setState({payments : response.data});

    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    // }

    componentDidMount() {
        //alert('email is '+this.props.match.params.id);
        axios.get('http://localhost:4000/payment/')
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
            return <AdminPaymentTableRow obj = {object} key = {i}/>;
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
                           <h6 style={{marginTop:10}}>Admin</h6>
                        </center>
                        
                        <a href= "/adminhome">New Rooms</a>
                        <a href="/adminhome">Event & Outdor Activity</a>
                        <a href="/adminhome">Destination</a>
                        <a href="/adminhome">Insurance</a>
                        <a href="/adminhome">Advertising</a>
                        <a href="/adminhome">Vehicles</a>
                        <a href="/adminhome">Payment</a>
                        <a href="/">SignOut</a>
                    </div>

                    <div class="content">

                        <br/>
                        <h3 align="center">Customer Payment history</h3>
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