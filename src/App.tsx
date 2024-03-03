import './App.css';
import styled from 'styled-components';
import {Headr} from "./layout/headr/Headr";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";


function App() {
    return (
        <div className="App">

            <Headr />
            <Main />
            <Skills />
        </div>
    );
}

export default App;

