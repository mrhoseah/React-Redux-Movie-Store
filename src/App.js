import './App.css';
import Movies from './components/Movies';
import {store} from './stores/movies/movieStore';
import {Provider} from 'react-redux'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Movies movies={store} />
      </Provider>
    </div>
  );
}

export default App;
