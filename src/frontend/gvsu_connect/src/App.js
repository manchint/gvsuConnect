import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import './App.css';


// Importing Pages
import Login from './pages/Login/Login';
import Signup from './pages/Signup/signup';
import Home from './pages/Home/Home';
import Professors from './pages/Professors/Professors';
import Accommodation from './pages/Accommodation/Accommodation';

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Routes >
          <Route path = "/" element = {<Login />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />}/>
          <Route path = "/home" element = {<Home />}/>
          <Route path = "/professors" element = {<Professors />}/>
          <Route path = "/accommodation" element = {<Accommodation />} />
          {/* <Route path = "/login" element = {<Login />}/>
          <Route path = "/signup" element = {<Signup />}/>
          <Route path = "/publish" element = {<PublishRecipe />}/>
          <Route path = "/viewdetails" element = {<DetailsView />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
