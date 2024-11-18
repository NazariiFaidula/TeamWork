import ShevchukDmytro from './ShevchukDmytro.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="card">
                <img src={ShevchukDmytro}/>
                <h2>Шевчук Д. Д.</h2>
                <p>Frontend Developer</p>
            </div>
        </div>
        <div className="row">
        </div>
    </div>
  );
}

export default App;
