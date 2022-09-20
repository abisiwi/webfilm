
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import './style/landingPage.css'

function App() {
  return (
    <div>
      <div className="myBg">
        <NavBar />
        <Intro />
      </div>
    </div>
  );
}

export default App;
