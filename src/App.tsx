import './App.css';
import styled from 'styled-components';
import {Headr} from "./layout/headr/Headr";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/works/Works";
import {Testimony} from "./layout/testimony/Testimony";
import {Contact} from "./layout/contact/Contact";


function App() {
    return (
        <div className="App">

            <Headr />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
        </div>
    );
}

export default App;

