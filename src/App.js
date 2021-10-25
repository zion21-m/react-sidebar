import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Message from "./pages/messages";
import Product from "./pages/Product";
import Report from "./pages/Report";
import Support from "./pages/Support";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Product} />
        <Route path="/reports" exact component={Report} />
        <Route path="/team" exact component={Team} />
        <Route path="/messages" exact component={Message} />
        <Route path="/support" exact component={Support} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
