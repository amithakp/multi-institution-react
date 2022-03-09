import React,{Component} from 'react';
import './institutionRegister.css';

const instRegisterUrl ="http://localhost:2000/api/auth/InstituteRegister";
class InstitutionRegister extends Component {
    constructor(props){
        super(props)

        this.state={
            // name:'',
            institution:'',
            email:'',           
            password:''
        }
    }

    handleSubmit = () => {
        fetch(instRegisterUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/institutionLogin'))
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return(
            <center>
                <div className="container">
                    <br/>
                    <div className="panel" id="panel-background">
                        <div className="panel-heading">
                           <span>Register</span>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <div className="col-md-6">
                                        <div className="form-group">
                                            <label> Name</label>
                                            <input className="form-control" name="name" 
                                            value={this.state.name} onChange ={this.handleChange}/>
                                        </div>
                                    </div> */}
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label> Institution</label>
                                            <input className="form-control" name="institution" 
                                            value={this.state.institution} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" name="email" 
                                            value={this.state.email} onChange ={this.handleChange}/>
                                        </div>
                                    </div>
                                    
                                    {/* <div className="col-md-6">
                                    <label>Institution</label>
                                        <div id="dropdown">
                                            <select id="dd1" className="col-md-6">
                                                <option value={this.state.institution}>TCS</option>
                                                <option value={this.state.institution}>IBM</option>
                                                <option value={this.state.institution}>TECH</option>
                                            </select> 
                                        </div>
                                    </div> */}
                                    {/* <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input className="form-control" name="phone" 
                                            value={this.state.phone} onChange ={this.handleChange}/>
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
export default InstitutionRegister;