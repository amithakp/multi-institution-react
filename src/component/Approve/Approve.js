import React,{Component} from 'react';
import './Approve.css';
import InstitutionHeader from '../institutionHeader';

const userInfo="http://localhost:2000/api/auth/users";
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
                <h1>{this.state.name}</h1>
                <div className="mainContainer">
                <button>Accept</button>
                <button className="secondButton" onClick={this.handleAccept}>Reject</button>
                </div>
            </>
        )
    }
}
export default Approve;