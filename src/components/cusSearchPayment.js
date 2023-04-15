import  React, {Component} from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import 'jspdf-autotable';

import './css/cusProfile.css';
import PaymentTableRow from './cusPaymentTableRow';


export default  class CusSearchPayment extends  Component{


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
        //alert('email is '+this.props.match.params.pathParam2);
        axios.get('http://localhost:4000/payment/cusgetsearchpayment/'+this.props.match.params.pathParam1+'/'+this.props.match.params.pathParam2)
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

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My Report";
        const headers = [["First Name","Last Name", "Email","Amount", "Date"]];
    
        const data = this.state.payments.map(elt=> [elt.fname, elt.lname, elt.email, elt.amount,elt.date]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
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
                        <from style ={{marginLeft:1300, display:'flex',gap:5}} onSubmit={this.onSubmit}>
                               
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/viewpayment/"+this.props.match.params.pathParam2} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Go Back</a>
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

                        <center>
                            <button className='btn btn-primary' onClick={() => this.exportPDF()}>Export Result</button>
                        </center>
                        
                       
                        
                    </div>
                </div>
        );
    }
}