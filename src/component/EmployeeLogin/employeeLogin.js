import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import './employeeLogin.css';

const loginrUrl = "http://localhost:2000/api/auth/login";
class EmployeeLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',           
            password:'',
            message:''
        }
    }

    handleSubmit = () => {
        fetch(loginrUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })

        .then((res) => res.json())
        .then((data) => { console.log(data)
            if(data.auth === false){
               
                this.setState({message:data.token});
            }else{
                localStorage.setItem('ltk',data.token)
                this.props.history.push('/employeeDashBoard')
                .then(this.props.eLoggedName = localStorage.setItem('name',this.state.name))
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
                            {/* <FontAwesomeIcon>faCoffee</FontAwesomeIcon> */}
                            <span id="login-span">Employee Login</span>
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
                                    <button disabled={!this.state.email} className="btn btn-success" onClick={this.handleSubmit}>
                                        Login
                                    </button>
                                </div>
                                <div className="parent-section">
                                    Need an account?
                                    <Link to="/employeeRegister">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
}

export default EmployeeLogin;