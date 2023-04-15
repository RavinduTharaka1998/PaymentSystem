import  React, {Component} from 'react';
import axios from 'axios'
import TableRow from './cusDetailsTableRow';

import './css/cusProfile.css';


export default  class CusProfile extends  Component{


    constructor(props) {
        super(props);
        this.state = {customers : []};
        this.state.Email = this.props.match.params.id;

        //const Email = this.props.match.params.id;
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/payment/'+this.props.match.params.id)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({customers : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
            return <TableRow obj={this.state.customers}/>
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
                        <h2 className= 'tittle'>Fast Food</h2>

                        <br/>
                        <h3 align="center">Customer Profile</h3>
                        <h5  align="center">You can edit or delete your profile details in here....</h5>
                       
                        <br/> <br/> <br/>
                        <center>
                            <div className='profile-top'>
                                <div className='left-details'>
                                <img src = "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" width="200"/>   
                                        
                                </div>
                                <div className='right-details'>
                                    {this.tabRow()}
                                </div>
                            </div>
                        </center>
                        
                    </div>
                </div>
        );
    }
}