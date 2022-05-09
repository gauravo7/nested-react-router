import logo from './logo.svg';
import Login from './components/pages/Login'
import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Users from './components/pages/Users';
import MyPro from './components/pages/MyPro';


function App() {
  return (
    <div className="App">
      <Router>         
        <Routes> 
          <Route exact path="/" element={<Login/>}/>
          <Route path="/user" element={<Users/>}>
            <Route path="mypro" element={<MyPro/>} />
          </Route>
        </Routes>
      </Router>        
    </div>
  );
}

export default App;
