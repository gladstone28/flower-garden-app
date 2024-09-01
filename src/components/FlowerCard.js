import React from 'react';
import './FlowerCard.css';

const FlowerCard = ({ name, image }) => (
  <div className="flower-card">
    <img src={image} alt={name} className="flower-image" />
    <h2>{name}</h2>
  </div>
);

export default FlowerCard;
