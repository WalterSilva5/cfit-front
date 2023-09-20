import './App.module.scss';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MenuComponent } from './components/menu/menu';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MenuComponent />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
