// CardContainer.js

import React from 'react';
import HomePetCard from './HomePetCard'; // Import the Card component
import './cardcontainer.css'; // Import your CSS styles
import petImg1 from '../../assets/img/Home/petCard1.PNG'
import petImg2 from '../../assets/img/Home/petCard2.PNG'
import petImg3 from '../../assets/img/Home/petCard3.PNG'
import petImg4 from '../../assets/img/Home/petCard4.PNG'
import petImg5 from '../../assets/img/Home/petCard5.PNG'

function PetCardsContainer() {
  const pets = [
    {
      initialRotation: Math.floor(Math.random() * 60) - 30,
      initialPosition: { x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) },
      image: petImg1,
      bgColor: '#EADBAA',
      textColor: '#393838',
      title: 'Mateo',
      description: 'Compañero leal, mueve mucho su cola, alegre sin límites: el mejor amigo del hombre.',
    },
    {
      initialRotation: Math.floor(Math.random() * 60) - 30,
      initialPosition: { x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) },
      image: petImg2,
      bgColor: '#F9804F',
      textColor: 'white',
      title: 'Firulais',
      description: 'Bola peluda llena de energía, con mucho amor por dar, besos babosos, guardián leal.',
    },
    {
      initialRotation: Math.floor(Math.random() * 60) - 30,
      initialPosition: { x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) },
      image: petImg3,
      bgColor: '#393838',
      textColor: 'white',
      title: 'Cookie',
      description: 'As de pelo juguetón, entusiasmo contagioso, corazón leal, felicidad constante.',
    },
    {
      initialRotation: Math.floor(Math.random() * 60) - 30,
      initialPosition: { x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) },
      image: petImg4,
      bgColor: '#FEC7B2',
      textColor: '#393838',
      title: 'Coco',
      description: 'Confidente canino, calidez peluda, compañero juguetón, afecto incondicional.',
    },
    {
      initialRotation: Math.floor(Math.random() * 60) - 30,
      initialPosition: { x: getRandomInt(-50, 50), y: getRandomInt(-50, 50) },
      image: petImg5,
      bgColor: '#930001',
      textColor: 'white',
      title: 'Max',
      description: 'Su felicidad se refleja en su cola, el miembro mas peludo de la familia, lleno de cariño para dar.',
    },
    // Add similar objects for other cards
  ];

  return (
    <div className="card-container">
      {pets.map(function (data, index) {
        return (
          <HomePetCard
            key={index}
            initialRotation={data.initialRotation}
            initialPosition={data.initialPosition}
            image={data.image}
            title={data.title}
            description={data.description}
            index={index}
            bgColor={data.bgColor}
            textColor={data.textColor}
          />
        );
      })}
    </div>
  );
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default PetCardsContainer;
