import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/payment/cusdeletepayment/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Payment Successfully Deleted....")
        window.location.replace('/viewpayment/'+this.props.obj.email);
    }
    render() {
        return (
           <tr>
                {/* <td>
                   {this.props.obj._id}
               </td> */}
               <td>
                   {this.props.obj.fname}
               </td>
               <td>
                   {this.props.obj.lname}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.amount}
               </td>
               <td>
                   {this.props.obj.date}
               </td>
               <td>
                   {this.props.obj.status}
               </td>
               <td>
                   <Link to={"/editpayment/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                   <br/><br/>
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;