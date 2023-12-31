import '../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
            <Route exact path="/" element={<Landing/>}/>
            <Route path="/Welcome" element={<Welcome/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="*" element={<ErrorPage/>}/>  
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}
export default App;
