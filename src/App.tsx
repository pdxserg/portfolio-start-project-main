import './App.css';
import styled from 'styled-components';
import {Headr} from "./layout/headr/Headr";
import {Main} from "./layout/sections/main/Main";


function App() {
    return (
        <div className="App">

            <Headr />
            <Main />
        </div>
    );
}

export default App;

