import React,{Component} from 'react';
import './instituteDashboard.css';
import InstitutionHeader from '../institutionHeader';

class instituteDashboard extends Component{
    render() {
        return (
            <>
                <InstitutionHeader/>
                <h1>amitha</h1>
                <div className="mainContainer">
                <button className="btn btn-danger block">Block</button>
                
                </div>
            </>
        )
    }
}
export default instituteDashboard;