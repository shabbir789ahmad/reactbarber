import logo from './logo.svg';
import './App.css';
import Navbar from './header/Navbar';
import Banner from './header/Banner';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="section">
        <Banner />
      </div>
    </div>
  );
}

export default App;
