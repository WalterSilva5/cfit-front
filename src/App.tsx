import "./App.module.scss";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MenuComponent from "./components/menu/menu";
import Routes from "./routes";

function App() {
  const location = window.location;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="appWrapper" style={{ display: 'flex' }}>
          {location.pathname !== '/login' && <MenuComponent />}
          <div className="contentArea" style={{ flexGrow: 1, overflowY: 'auto' }}>
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
