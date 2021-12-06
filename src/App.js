import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddEmployee from './AddEmployee';
import EmployeeList from './EmployeeList';
import UpdateEmployee from './UpdateEmployee';
import ViewDetails from './ViewDetails';

function App() {
  return (
    <div>
        <h3 id="title">Employee Management App</h3>
        <BrowserRouter>
        
        <Switch>
          <Route path="/"><EmployeeList/></Route>
          <Route path="/add-employee/_add"><AddEmployee/></Route>
          <Route path="/view-employee/:Id"><ViewDetails/></Route>
          <Route path="/add-employee/:Id"><UpdateEmployee/></Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
