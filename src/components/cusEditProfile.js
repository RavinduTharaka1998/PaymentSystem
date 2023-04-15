import  React, {Component} from 'react';
import axios from 'axios';


import './css/cusRegistration.css';


export default  class cusEditProfile extends  Component{


    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDoB = this.onChangeDoB.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCPassword = this.onChangeCPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            dob:'',
            gender:'',
            city:'',
            phone:'',
            password:'',
            cpassword:''
        }
    }
    onChangeName(e){
        this.setState( {
           name: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangeDoB(e){
        this.setState( {
            dob: e.target.value
        });
    }
    onChangeGender(e){
        this.setState( {
            gender: e.target.value
        });
    }
    onChangeCity(e){
        this.setState( {
            city: e.target.value
        });
    }
    onChangePhone(e){
        this.setState( {
            phone: e.target.value
        });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }
    onChangeCPassword(e){
        this.setState( {
            cpassword: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.name,
            email : this.state.email,
            dob : this.state.dob,
            gender : this.state.gender,
            city : this.state.city,
            phone : this.state.phone,
            email : this.state.email,
            password : this.state.password
        };
       
        
        if(this.state.password ===  this.state.cpassword){
            if(this.state.password.length >= 8){
                if(this.state.phone.length === 10){
                            axios.post('http://localhost:4000/payment/cusupdate/'+this.props.match.params.id,obj)
                                .then(res => {
                                    alert("Update Successfully");
                                    this.setState({
                                        name: '',
                                        email: '',
                                        dob:'',
                                        gender:'',
                                        city:'',
                                        phone:'',
                                        password:'',
                                        cpassword:''
                            
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/');
                }        
                else{
                    alert('Invalid phone number.. Pleace enter 10 numbers for contact number.');
                }
            } 
            else {
                alert('Pleace enter at least 8 characters for passwords.');
            }
        }else{
            alert('Your password and confirm password are miss match... Pleace enter same passwords');
        }

    }

    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/payment/cusedit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    dob: res.data.dob,
                    gender: res.data.gender,
                    city: res.data.city,
                    phone: res.data.phone,
                    password: res.data.password,
                    cpassword: res.data.cpassword
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    render() {
        return(
            <div className='reg-container'>
                <div className='log-top'>
                    {/* <h2>Login</h2> */}
                    <img src = "https://images.pond5.com/artistic-concept-painting-beautiful-train-illustration-209134821_iconl_wide_nowm.jpeg"/>
                </div>
                <br/>
                <div className='reg-bottom'>
                    <div className='reg-bottom-inner'>
                        <br/>
                        <h3>User Login Details</h3>
                        <center>
                            <img src = "https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg"/>
                        </center>
                        <br/>
                        <div className="container" style={{marginTop:10}}>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Name :</label>
                                    <input type ="text" required className="form-control" placeholder="enter name" value={this.state.name} onChange = {this.onChangeName}/>
                                </div>
                                <div className="form-group">
                                    <label>Email :</label>
                                    <input type ="email" required className="form-control" placeholder="enter email" value={this.state.email} onChange = {this.onChangeEmail}/>
                                </div>
                                <div className="form-group">
                                    <label>Date of Birth :</label>
                                    <input type ="date" required className="form-control" value={this.state.dob} onChange = {this.onChangeDoB}/>
                                </div>
                                <div className="form-group">
                                    <label>Gender :</label>
                                    <select className="form-control" onChange = {this.onChangeGender} value={this.state.gender}>
                                        <option value="Male">Male</option>
                                        <option value="FeMale">FeMale</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>City :</label>
                                    <input type ="text" required className="form-control" placeholder="enter city" value={this.state.city} onChange = {this.onChangeCity}/>
                                </div>
                                <div className="form-group">
                                    <label>Contact Number :</label>
                                    <input type ="number" required className="form-control" placeholder="enter phone number" value={this.state.phone} onChange = {this.onChangePhone}/>
                                </div>
                                <div className="form-group">
                                    <label>Password :</label>
                                    <input type ="password" required className="form-control" placeholder="enter password" value={this.state.password} onChange = {this.onChangePassword}/>
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password :</label>
                                    <input type ="password" required className="form-control" placeholder="enter confirm password" value={this.state.cpassword} onChange = {this.onChangeCPassword}/>
                                </div>
                                <div className="form-group" >
                                    <input type = "submit" value = "Update Profile" className="btn btn-primary"/>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

