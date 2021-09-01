import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Favorite from "./components/notes/Favorite";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorite" component={Favorite} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
