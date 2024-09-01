import React from 'react';
import FlowerCard from './FlowerCard';
import ixoraImage from '../public/images/ixora.jpg';
import crossandraImage from '../public/images/crossandra.jpg';
import crownOfThornsImage from '../public/images/crown-of-thorns.jpg';
import goldenDurantaImage from '../public/images/golden-duranta.jpg';

const flowers = [
  { name: 'Ixora', image: ixoraImage },
  { name: 'Crossandra', image: crossandraImage },
  { name: 'Crown of Thorns', image: crownOfThornsImage },
  { name: 'Golden Duranta', image: goldenDurantaImage },
];

const FlowerList = () => (
  <div className="flower-list">
    {flowers.map((flower, index) => (
      <FlowerCard key={index} name={flower.name} image={flower.image} />
    ))}
  </div>
);

export default FlowerList;
