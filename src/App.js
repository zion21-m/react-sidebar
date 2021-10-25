import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Report from "./pages/Report";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Product} />
        <Route path="/reports" exact component={Report} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
