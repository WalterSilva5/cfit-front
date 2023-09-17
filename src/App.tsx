import "./App.module.scss";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/navigation/navigation";
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
