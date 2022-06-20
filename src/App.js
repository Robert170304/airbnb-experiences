import React from 'react';
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'
import Data from './data'

function App() {
  const cards = Data.map(function(dataitem, id) {
    return <Card key={id}
                item={dataitem} />
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='card-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;



