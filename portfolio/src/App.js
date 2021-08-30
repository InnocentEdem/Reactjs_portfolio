import logo from './logo.svg';
import './App.css';
import Navbar from './utitilities/navbar';
import Home from './containers/homepage/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Home/>
       
      
       
      
      </header>
      <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
    </div>
  );
}

export default App;
