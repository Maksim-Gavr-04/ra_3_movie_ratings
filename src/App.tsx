import './App.css';
import Stars from './Stars';

function App() {
  return (
    <div className='container'>
      { [ ...Array(5).keys() ].map(value => <Stars key={ value } count={ value + 1 } />) }
    </div>
  );
}

export default App;