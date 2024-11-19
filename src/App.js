import YavorskyiImage from './Yavorskyi.jpg';
import MaksImage from './Photo.jpg';
import ShevchukDmytro from './ShevchukDmytro.jpg';
import NazariiImage from './Nazarii.jpg'
import ChernetsImage from "./Chernets.jpg"
import './App.css';

function App() {
  return (
    <h2 className="header">
        AlcoFamily
    </h2>
    <div className="container">
        <div className="row">
            <div className="card">
                <img src={NazariiImage}/>
                <h2>Файдула Н. А.</h2>
                <p>Project Manager</p>
            </div>
            <div className="card">
                <img src={MaksImage}/>
                <h2>Фалібога М. С.</h2>
                <p>QA engineer</p>
            </div>
             <div className="card">
                <img src={ShevchukDmytro}/>
                <h2>Шевчук Д. Д.</h2>
                <p>Frontend Developer</p>
            </div>
        </div>
        <div className="row">
            <div className="card">
                <img src={YavorskyiImage}/>
                <h2>Яворський А. В.</h2>
                <p>UI/UX designer</p>
            </div>
            <div className="card">
                <img src={ChernetsImage}/>
                <h2>Чернець А. В.</h2>
                <p>Backend Developer</p>
            </div>
        </div>
    </div>
  );
}

export default App;
