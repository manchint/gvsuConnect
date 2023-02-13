import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import './App.css';


// Importing Pages
import Login from './pages/Login/Login'

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Routes >
          <Route path = "/" element = {<Login />} />
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
