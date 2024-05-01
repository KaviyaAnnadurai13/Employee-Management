import './App.css';
import Home from './Home';
import EmployeeView from './employee/EmployeeView';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS here
//import "../node_modules/bootstrap/dist/js/bootstrap.min.js"; // Import Bootstrap JS here
import Navbar from './common/Navbar.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddEmployee from './employee/AddEmployee.js';
import EmployeeProfile from './employee/EmployeeProfile.js';

import EditEmployee from './employee/EditEmployee.js';

function App() {
  return (
    <main className="container mt-5"> 
     <Router>
     <Navbar/>
    
      <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/view-emp" element={<EmployeeView/>} ></Route>
        <Route exact path="/add-emp" element={<AddEmployee/>} ></Route>
        <Route exact path="/edit-emp/:id" element={<EditEmployee/>} ></Route>
        <Route exact path="/emp-profile/:id" element={<EmployeeProfile/>} ></Route>
      </Routes>
     </Router>

    </main>
  );
}

export default App;
