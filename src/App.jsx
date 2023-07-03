import React from 'react';
import {Blog, Features, Header, Footer, Possibility, Whatgpt} from './containers';
import { Article, Brand, Cta, Navbar } from './components';

import './app.css';

function App() {
  return (
    <div className=''>
      <div className='gradiente'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <Whatgpt />
        <Features />
        <Possibility />
        <Article />
        <Cta />
        <Blog />
        <Footer />
        
        
        
        
        
    </div>
  )
}

export default App
