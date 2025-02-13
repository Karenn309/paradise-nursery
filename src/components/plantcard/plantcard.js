import React from 'react';

const PlantCard = ({ plant, addToCart }) => {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img src={plant.image} className="card-img-top" alt={plant.name} />
      <div className="card-body">
        <h5 className="card-title">{plant.name}</h5>
        <p className="card-text">{plant.description}</p>
        <h6 className="card-text">Cost: ${plant.cost.toFixed(2)}</h6>
        <button className="btn btn-primary" onClick={() => addToCart(plant)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default PlantCard;
