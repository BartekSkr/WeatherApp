import './App.css';
import { Daily } from './components/weathercast/Daily';
import { Hourly } from './components/weathercast/Hourly';
// import { Search } from './components/weathercast/Search';
import { Today } from './components/weathercast/Today';

function App() {
  return (
    <div className="App">
      <div className='container'>
        {/* <Search /> */}
        <Today />
        <Hourly />
        <Daily />
      </div>
    </div>
  );
}

export default App;
