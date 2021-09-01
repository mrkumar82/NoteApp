import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Favorite from "./components/notes/Favorite";
import NotesDetail from "./components/notes/NotesDetail";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorite} />
          <Route exact path="/notes/:id" component={NotesDetail} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
