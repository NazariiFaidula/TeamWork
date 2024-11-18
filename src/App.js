import './App.css';
import MaksImage from './Photo.jpg';

function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="card">
                <img src={MaksImage}/>
                <h2>Фалібога М.С.</h2>
                <p>QA engineer</p>
            </div>
        </div>
        <div className="row">
        </div>
    </div>
  );
}

export default App;
