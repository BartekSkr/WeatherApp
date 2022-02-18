import { Provider } from 'react-redux';
import './App.scss';
import Search from './app/components/Search/Search';
import { store } from '../src/app/store/store';
import Today from './app/components/Today/Today';
import Hourly from './app/components/Hourly/Hourly';
import Daily from './app/components/Daily/Daily';

function App() {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <Search />
        <Today />
        <Hourly />
        <Daily />
      </div>
    </Provider>
  );
}

export default App;
