import React from 'react';
import волк from './волк.jpg'
import Cards from './components/Cards'
import './App.css';
import './bootstrap.min.css'

export default function App() {
  return (
    <>
      <Cards
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content.">
        <img src={волк} className="card-img-top" alt="..." />
      </Cards>
      <Cards 
         title="Special title treatment"
         text="With supporting text bellow as a natural lead-in to additional content"
      />
    </>
  );
}

