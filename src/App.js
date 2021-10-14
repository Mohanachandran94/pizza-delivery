import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import Homescreen from './screen/Homepage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreen />
    </div>
  );
}

export default App;
