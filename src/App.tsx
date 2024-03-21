import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/headr/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/works/Works";
import {Testimony} from "./layout/testimony/Testimony";
import {Contact} from "./layout/contact/Contact";
import {Slogan} from "./layout/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">

            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
            <Slogan />
            <Footer />
        </div>
    );
}

export default App;

