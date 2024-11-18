import YavorskyiImage from './Yavorskyi.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="row">
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
