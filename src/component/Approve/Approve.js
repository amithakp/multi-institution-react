import React,{Component} from 'react';
import './Approve.css';
import InstitutionHeader from '../institutionHeader';

class Approve extends Component{
    render() {
        return (
            <>
                <InstitutionHeader/>
                <h1>amitha</h1>
                <div className="mainContainer">
                <button>Approve</button>
                <button className="secondButton">Reject</button>
                </div>
            </>
        )
    }
}
export default Approve;