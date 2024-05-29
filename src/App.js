import React from 'react';
import Header from './components/Header';
import Expertise from './components/Expertise';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Typing from './Typing';
import './App.css';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <main>
                <Typing />
                <Expertise />
                <Work />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
