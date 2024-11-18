import NazariiImage from '49.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="card">
                <img src={NazariiImage}></img>
                <h2>Файдула Н.А.</h2>
                <p>Project Manager</p>
            </div>
        </div>
        <div className="row">
        </div>
    </div>
  );
}

export default App;
