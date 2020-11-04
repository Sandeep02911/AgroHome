import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Info/Contact";
import About from "./components/Info/About";
import Cart from "./components/Cart/Cart";
import SignUp from "./components/SignUp/SignUp";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/categories" exact component={Categories} />
                    <Route path="/contactus" exact component={Contact} />
                    <Route path="/about" exact component={About} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/signup" exact component={SignUp} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
