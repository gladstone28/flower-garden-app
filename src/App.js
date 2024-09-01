import React from 'react';
import Header from './components/Header';
import FlowerList from './components/FlowerList';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <FlowerList />
    </main>
    <Footer />
  </div>
);

export default App;
