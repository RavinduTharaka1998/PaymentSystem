import  React, {Component} from 'react';
import axios from 'axios';


// import './css/LandingPage.css';


export default  class Create extends  Component{


    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangecPassword = this.onChangecPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            address: '',
            nic:'',
            phone:'',
            email:'',
            password:'',
            cpassword:''
        }
    }
    onChangeName(e){
        this.setState( {
           name: e.target.value
        });
    }
    onChangeAddress(e){
        this.setState( {
            address: e.target.value
        });
    }
    onChangeNIC(e){
        this.setState( {
            nic: e.target.value
        });
    }
    onChangePhone(e){
        this.setState( {
            phone: e.target.value
        });
    }

    onChangeEmail(e){

            this.setState({
                email: e.target.value
            });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }
    onChangecPassword(e){
        this.setState( {
            cpassword: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.name,
            address : this.state.address,
            nic : this.state.nic,
            phone : this.state.phone,
            email : this.state.email,
            password : this.state.password
        };
       
        const lastelement = this.state.nic.charAt(this.state.nic.length - 1);
       
        
        if(this.state.password ===  this.state.cpassword){
            if(this.state.password.length >= 8){
                if(this.state.phone.length === 10){
                    if(this.state.nic.length === 10){
                        if(lastelement === 'V' || lastelement === 'v'){
                            axios.post('http://localhost:4000/trainFood/add',obj)
                                .then(res => {
                                    alert("Registration Successfully");
                                    this.setState({
                                        name :'',
                                        address :'',
                                        nic :'',
                                        phone:'',
                                        email:'',
                                        password:'',
                                        cpassword:''
                            
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/signIn');
                        } 
                        else {
                            alert('Invalid NIC Number.. Pleace enter "V" for nic.');
                        }
                    } 
                    else {
                        alert('Invalid NIC Number.. Pleace enter 10 digits for nic.');
                    }
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

    render() {
        return(
            <div>
                <div class="sidebar">
                    <a href="/">Home</a>
                    <a href="/create">New Customer</a>
                    <a href="/signin">SignIn</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>

                    <div className='inner-menu'>
                        <a href="/signin">Terms & Condition</a>
                        <a href="/about">Setting</a>
                        <a href="/contact">More</a>
                    </div>
                </div>

                <div class="content">
                    <h2 className= 'tittle'>Fast Food</h2>
                    <br/>
                    <div className="container " style={{marginTop:10}}>
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Customer Registration Form</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Name :</label>
                                <input type ="text" required placeholder = "Please enter name" className="form-control" value={this.state.name} onChange = {this.onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label>Address :</label>
                                <input type ="text" required placeholder = "Please enter address" className="form-control" value={this.state.address} onChange = {this.onChangeAddress}/>
                            </div>
                            <div className="form-group">
                                <label>NIC :</label>
                                <input type ="text" required placeholder = "Please enter NIC" className="form-control" value={this.state.nic} onChange = {this.onChangeNIC}/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number :</label>
                                <input type ="number" required placeholder = "Please enter contact number" className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
                            </div>
                            <div className="form-group">
                                <label>eMail Address :</label>
                                <input type ="email" required placeholder = "Please enter email" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password :</label>
                                <input type ="password" required placeholder = "Please enter Password" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password :</label>
                                <input type ="password" required placeholder = "Re-Type Password" className="form-control" value={this.state.cpassword} onChange = {this.onChangecPassword}/>
                                <span>( At least 8 characters )</span>
                            </div>

                            <div className="form-group">
                                <input type = "submit" value = "Register Service" className="btn btn-dark"/>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <div className='top-footer'>
                        <div className='col-img'>
                            <img src = "https://limitlessspice.com/wp-content/uploads/2022/02/kottu-g734b601c4_1920.jpg" width="400"/>
                            <h4>Koththu</h4>
                            <h4>Rs 1000/=</h4>
                        </div>
                        <div className='col-img'>
                            <img src = "https://cdn.chinesedragoncafe.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/r/i/rice-with-shrimp-_-chicken.jpg" width="475"/>
                            <h4>Mix Rice</h4>
                            <h4>Rs 900/=</h4>
                        </div>
                        <div className='col-img'>
                            <img src = "https://static.onecms.io/wp-content/uploads/sites/43/2023/01/12/270770-garlic-noodles-ddmfs-4x3-0189.jpg" width="" height=""/>
                            <h4>Noodles</h4>
                            <h4>Rs 1200/=</h4>
                        </div>
                    </div>
                     
                    <br/>
                    <hr/>
                  
                    <hr/>
                    <br/>
                </div>
            </div>
        )
    }
}

