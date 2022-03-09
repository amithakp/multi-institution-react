import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './institutionHeader.css';
import {withRouter} from 'react-router-dom';

class InstitutionHeader extends Component {
    constructor(props) {
        super()
        this.state = {
            userData :''
        }
    }

    render() {
        return(
            <>
                <nav className="navbar navbar-inverse ">
                    <div className="logo">
                        Employee
                    </div>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* <Link to="/" className="navbar-brand"> DashBoardHome</Link> */}
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        {/* <div>
                            <img src="/public/images/yehilogo.png" alt="yehi"/>
                        </div> */}
                        <ul className="nav navbar-nav">        
                            <li><Link to="/approve">Approve</Link></li>
                            <li><Link to="/instituteDashboard">Dashboard</Link></li>
                            {/* <li><button onClick={this.handleLogout}  className="btn btn-success btn-md">Logout</button></li> */}
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default withRouter(InstitutionHeader);