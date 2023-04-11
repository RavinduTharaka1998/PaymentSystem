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

        if ((this.state.email === "admin") && (this.state.password === "adminMatara")) {
             const Station = "Matara";
             this.props.history.push('/adminhome/'+Station);

        }
        else if ((this.state.email === "admin") && (this.state.password === "adminGalle")) {

            const Station = "Galle";
            this.props.history.push('/adminhome/'+Station);

       }
       else if ((this.state.email === "admin") && (this.state.password === "adminColombo")) {

        const Station = "Colombo";
        this.props.history.push('/adminhome/'+Station);

       }else {
            axios.post('http://localhost:4000/trainFood/login',object)
                .then(res => {
                    if(res.data.message === "Successful Login"){
                        // alert(res.data.message)
                        // alert(Email)
                        this.props.history.push('/index/'+Email);
                    }
                    else{
                        // alert(res.data.message)
                        this.props.history.push('/signIn');
                    }

                });
        }
        

    }

    render() {
        return(
            <div className='log-container'>
                <div className='log-top'>
                    <h2>Login</h2>
                    <img src = "https://images.pond5.com/artistic-concept-painting-beautiful-train-illustration-209134821_iconl_wide_nowm.jpeg"/>
                </div>
                <br/>
                <div className='log-bottom'>
                    <div className='log-bottom-inner'>
                        <br/>
                        <h3>User Details</h3>
                        <img src = "https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg"/>
                    </div>
                </div>
            </div>
        )
    }
}
