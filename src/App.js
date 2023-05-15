import React from "react";
import SearchBar from "./components/SearchBar";

import "./App.css";
import Header from "./components/Header";

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <SearchBar />
        </div>
    );
};

export default App;
