import React,{Component} from 'react';
import './Approve.css';
import InstitutionHeader from '../institutionHeader';

// const userInfo="http://localhost:2000/api/auth/users";
class Approve extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',           
        }
    }
    handleAccept = ()=>{
        this.setState({name:''})
    }
    render() {
        return (
            <>
                <InstitutionHeader/>
                <h1>{localStorage.getItem("name")}</h1> {/* get signup employee name */}
                <div className="mainContainer">
                <button className="btn btn-success">Accept</button>
                <button className="btn btn-danger secondButton" onClick={this.handleAccept}>Reject</button>
                </div>
            </>
        )
    }
}
export default Approve;