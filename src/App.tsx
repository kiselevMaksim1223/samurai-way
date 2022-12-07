import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navigation";
import Profile from "./Components/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
