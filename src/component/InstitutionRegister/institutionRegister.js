import React,{Component} from 'react';
import './institutionRegister.css';

class InstitutionRegister extends Component {
    constructor(props){
        super(props)

        this.state={
            institutionName:'',
            // phone:'',
            email:'',           
            password:''
        }
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
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Institution Name</label>
                                            <input className="form-control" name="institutionName" 
                                            value={this.state.institutionName} onChange ={this.handleChange}/>
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