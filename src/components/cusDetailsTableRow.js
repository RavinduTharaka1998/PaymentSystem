import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/payment/cusdelete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        alert("Your Accout Successfully Deleted....")
        window.location.replace('/signIn');
    }
    render() {
        return (
            <div className='pro-details'>
            <table className="table table-striped">
               <tr>
                  <td style={{fontWeight:'bold'}}>Name</td>
                  <td>{this.props.obj.name}</td>
               </tr>
               <tr>
                  <td style={{fontWeight:'bold'}}>Email</td>
                  <td>{this.props.obj.email}</td>
               </tr>
               <tr>
                  <td style={{fontWeight:'bold'}}>Birthday</td>
                  <td>{this.props.obj.dob}</td>
               </tr>
               <tr>
                  <td style={{fontWeight:'bold'}}>Gender</td>
                  <td>{this.props.obj.gender}</td>
               </tr>
               <tr>
                  <td style={{fontWeight:'bold'}}>City</td>
                  <td>{this.props.obj.city}</td>
               </tr>
               <tr>
                  <td style={{fontWeight:'bold'}}>phone</td>
                  <td>{this.props.obj.phone}</td>
               </tr>
              
               <tr>
                  <td> <Link to={"/cusedit/"+this.props.obj._id} className="btn btn-success">Edit</Link></td>
                  <td><button onClick={this.deletesss} className="btn btn-danger">Delete Account</button></td>
               </tr>
            </table>
        </div>
        );
    }
}

export default TableRow;