import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './institutionLogin.css';

const instLoginrUrl = "http://localhost:2000/api/auth/instituteLogin";

    class InstitutionLogin extends Component {
        constructor(props){
            super(props)
            this.state={
                email:'',           
                password:'',
                message:''
    
            }
        }

        handleSubmit = () => {
            fetch(instLoginrUrl,{
                method:'POST',
                headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(this.state)
            })

            .then((res) => res.json())
            .then((data) => {
                if(data.auth === false || data.role === false ){
                    console.log(data)
                    this.setState({message:data.token});
                }else{
                    localStorage.setItem('ltk',data.token)
                    
                    this.props.history.push('/approve')
                }
            })
        }

        handleChange = (event) => {
            console.log(event)
            this.setState({[event.target.name]:event.target.value})
        }

        render(){
            return(
                <center>  
                    <div className="container-fluid">
                    <br/>
                    <div className="panel panel-success">
                        <div className="panel-heading">
                        <span id="login-span">Login</span>
                        </div>
                        <div className="panel-body">
                            <h3>{this.state.message}</h3>
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control" name="email" 
                                                value={this.state.email} onChange ={this.handleChange} required/>
                                            </div>
                                        </div> 
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input className="form-control" name="password" type="password" 
                                                value={this.state.password} onChange ={this.handleChange} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="parent-section">
                                        <button  className="btn btn-success" onClick={this.handleSubmit}>
                                            Login
                                        </button>
                                    </div>
                                    <div className="parent-section">
                                        Need an account?
                                        <Link to="/institutionRegister">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            )
        }
    }

export default InstitutionLogin;