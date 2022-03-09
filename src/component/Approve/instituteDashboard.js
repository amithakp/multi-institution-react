import React,{Component} from 'react';
import './instituteDashboard.css';
import InstitutionHeader from '../institutionHeader';

class instituteDashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',           
        }
    }
    render() {
        return (
            <>
                <InstitutionHeader/>
                <h1>{localStorage.getItem("name")}</h1> {/* get loggedIn employee name */}
                <div className="mainContainer">
                <button className="btn btn-danger block">Block</button>
                
                </div>
            </>
        )
    }
}
export default instituteDashboard;