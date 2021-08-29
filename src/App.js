import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Form from "./components/home/Form";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Form />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
