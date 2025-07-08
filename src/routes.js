import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";

import Header from './components/Header';
import Footer from "./components/Footer";

function RoutesApp(){
    return(
        <BrowserRouter>
                <Header/>
                        <Routes>
                            <Route path="/" element={ <Home/> } />
                            <Route path="/contato" element={ <Contact/> } />
                            <Route path="/sobrenos" element={ <About/> } />
                            <Route path="/servico" element={ <Service/> } />
                        </Routes>
                    
                <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;