import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import  {BrowserRouter,Route,Routes} from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}>
          
        </Route>
        <Route path="/contact" element={<Contact/>}>
         
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
