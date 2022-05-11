import './App.css';
import Movies from './components/Movies';
import {store} from './redux/store';
import {Provider} from 'react-redux'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Movies />
      </Provider>
    </div>
  );
}

export default App;
