import  React, {Component} from 'react';
import axios from 'axios';


import './css/cusLogin.css';

export default  class SignIn extends  Component{
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:''
        }
    }
    onChangeEmail(e){
        this.setState( {
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();


        const Email = this.state.email;
        let object = {
            email : this.state.email,
            password : this.state.password
        };

        if ((this.state.email === "admin") && (this.state.password === "admin")) {
            
             this.props.history.push('/adminhome');


       }else {
            axios.post('http://localhost:4000/payment/cuslogin',object)
                .then(res => {
                    if(res.data.message === "Successful Login"){
                        // alert(res.data.message)
                        // alert(Email)
                        this.props.history.push('/profile/'+Email);
                    }
                    else{
                        alert("Invalide Login!!!");
                        this.props.history.push('/');
                    }

                });
        }
        

    }

    render() {
        return(
            <div className='log-container'>
                <div className='log-top'>
                    {/* <h2>Login</h2> */}
                    <img src = "https://images.pond5.com/artistic-concept-painting-beautiful-train-illustration-209134821_iconl_wide_nowm.jpeg"/>
                </div>
                <br/>
                <div className='log-bottom'>
                    <div className='log-bottom-inner'>
                        <br/>
                        <h3>User Login Details</h3>
                        <img src = "https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg"/>
                        <br/>
                        <div className="container" style={{marginTop:10}}>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Username :</label>
                                    <input type ="text" required className="form-control" placeholder="raone@gmail.com" value={this.state.email} onChange = {this.onChangeEmail}/>
                                </div>
                                <div className="form-group">
                                    <label>Password :</label>
                                    <input type ="password" required className="form-control" placeholder="********" value={this.state.password} onChange = {this.onChangePassword}/>
                                </div>
                                <div className="form-group" >
                                    <input type = "submit" value = "Sign In" className="btn btn-primary"/>
                                </div>
                            </form>

                            <a href ="/registeration">Create New Account</a>
                            <p style={{textAlign:'center'}}>-------- or use one of these options --------</p>

                            <center>
                                <div className='social-media'>
                                    <img src = "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"/>
                                    <img src = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"/>
                                    <img src = "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"/>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
