import './App.css';
import { WeatherState } from './components/context/WeatherState';
import { Toast } from './components/toast/Toast';
import { Daily } from './components/weathercast/Daily';
import { Hourly } from './components/weathercast/Hourly';
import { Today } from './components/weathercast/Today';

function App() {
  return (
    <WeatherState>
    <div className="App">
      <div className='container'>
        <Toast />
        <Today />
        <Hourly />
        <Daily />
      </div>
    </div>
    </WeatherState>
  );
}

export default App;
