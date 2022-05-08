import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./Components/Footer/FooterComponent";
import "./Components/Header/header.scss";
import "./index.scss";
import Blog from "./Page/Blog/Blog";
import Contact from "./Page/Contact/Contact";
import Header from "./Page/Header";
import Home from "./Page/Home/Home";
import NotFound from "./Page/NotFound/NotFound";
import Post from "./Page/Post/Post";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/blog/:slug" element={<Post />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
