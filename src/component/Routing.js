import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Approve from './Approve/Approve';
import EmployeeLogin from './EmployeeLogin/employeeLogin';
import EmployeeRegister from './EmployeeRegister/employeeRegister';
import InstitutionLogin from './InstitutionLogin/institutionLogin';
import InstitutionRegister from './InstitutionRegister/institutionRegister';
import InstituteDashboard from './Approve/instituteDashboard';

const Routing = () => {
    return(
        <BrowserRouter>
        <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/approve" component={Approve}/>
             <Route path="/instituteDashboard" component={InstituteDashboard}/>
             <Route path="/employeeLogin" component={EmployeeLogin}/>
             <Route path="/employeeRegister" component={EmployeeRegister}/>
             <Route path="/institutionLogin" component={InstitutionLogin}/>
             <Route path="/institutionRegister" component={InstitutionRegister}/>
        </Switch>   
        </BrowserRouter>
    )
}

export default Routing;
