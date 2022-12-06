import "./App.css";
// import { TodoProvider } from "./context/TodoProvider";
import Home from "./pages/Home";
import store from "./app/store";
import { Provider } from "react-redux";

const App = () => (
  <div className="container">
    <Provider store={store}>
      <Home />
    </Provider>
  </div>
);
export default App;
