import React,{Component} from 'react';
import './employeeRegister.css';

const registerUrl ="http://localhost:2000/api/auth/register";
class EmployeeRegister extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            institution:'',
            email:'',           
            password:''
        }
    }

    handleSubmit = () => {
        fetch(registerUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then( this.props.history.push('/employeeLogin'))
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({[event.target.name]:event.target.value})
    }
    
    render(){
        return(
            <center>
                <div className="container">
                    <br/>
                    <div className="panel" id="panel-background">
                        <div className="panel-heading">
                           <span>Employee Register</span>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" name="name" 
                                            value={this.state.name} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" name="email" 
                                            value={this.state.email} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Institution</label>
                                            <input className="form-control" name="institution" 
                                            value={this.state.institution} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-6">
                                    <label>Institution</label>
                                        <div id="dropdown">
                                            <select id="dd1" className="col-md-6">
                                                <option value="1">TCS</option>
                                                <option value="2">IBM</option>
                                                <option value="3">TECH</option>
                                            </select> 
                                        </div>
                                    </div> */}
                                    <div id="password" className="col-md-6">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" name="password" type="password"
                                            value={this.state.password} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="parent-section">
                                    <button className="btn btn-success" onClick={this.handleSubmit}>
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
}
export default EmployeeRegister;