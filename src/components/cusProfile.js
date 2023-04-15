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
                        
                        <a href= {"/index/" +this.props.match.params.id}>Home</a>
                        <a href={"/myorder/" +this.props.match.params.id}>My Orders</a>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact Us</a>
                        <a href={"/cusprofile/"+this.props.match.params.id}>Profile</a>
                        <a href="/">SignOut</a>
                    </div>

                    <div class="content">
                        <h2 className= 'tittle'>Fast Food</h2>

                        <br/>
                        <h3 align="center">Customer Profile</h3>
                        <h3  align="center">Your Profile Details</h3>
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