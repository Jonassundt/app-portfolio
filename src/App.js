import React from 'react';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TopHeader from './components/TopHeader';

function App() {

    return (
        <div className="App">
            <TopHeader />
            <About />
            <Technologies />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;