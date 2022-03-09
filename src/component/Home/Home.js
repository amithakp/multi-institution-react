import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
    return(
        <>        
           <center className="homeButton">
                <Link to="/employeeLogin" className="btn btn-success btn-md">Employee</Link> &nbsp;&nbsp;
                <Link to="/InstitutionLogin" className="btn btn-warning btn-md">Institute</Link>
            </center>
        </>
    )
}

export default Home;