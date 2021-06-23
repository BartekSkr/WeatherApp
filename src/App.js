import './App.css';
import { ToastState } from './components/context/toast/ToastState';
import { WeatherState } from './components/context/weather/WeatherState';
import { Daily } from './components/weathercast/Daily';
import { Hourly } from './components/weathercast/Hourly';
import { Search } from './components/weathercast/Search';
import { Today } from './components/weathercast/Today';

function App() {
  return (
    <ToastState>
      <WeatherState>
        <div className="App">
          <div className='container'>
            <Search />
            <Today />
            <Hourly />
            <Daily />
          </div>
        </div>
      </WeatherState>
    </ToastState>
  );
}

export default App;
