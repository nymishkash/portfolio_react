import React from 'react';
import Header from './components/Header';
import Expertise from './components/Expertise';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
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
