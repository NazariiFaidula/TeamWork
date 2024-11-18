import YavorskyiImage from './Yavorskyi.jpg';
import MaksImage from './Photo.jpg';
import ShevchukDmytro from './ShevchukDmytro.jpg';
import NazariiImage from './Nazarii.jpg'
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="card">
                <img src={NazariiImage}/>
                <h2>Назарій Н.А.</h2>
                <p>Project Manager</p>
            </div>
            <div className="card">
                <img src={MaksImage}/>
                <h2>Фалібога М.С.</h2>
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
                <h2>Яворський А.В.</h2>
                <p>UI/UX designer</p>
            </div>
        </div>
    </div>
  );
}

export default App;
