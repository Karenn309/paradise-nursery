import React, { useState } from "react";
import PlantCard from "../plantcard/plantcard";
import lavenderImg from "../../assets/images/image.png";
import aloeVeraImg from "../../assets/images/download.jpg";
import monsteraImg from "../../assets/images/monstera.jpg";
import snakePlantImg from "../../assets/images/snakeplant.jpg";
import cactusImg from "../../assets/images/cactus.jpg";
import fernImg from "../../assets/images/fern.jpg";

const products = [
  {
    id: 1,
    name: "Lavender",
    category: "Aromatic Plants",
    description: "Aromatic plant used for relaxation.",
    cost: 10,
    image: lavenderImg,
  },
  {
    id: 2,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    description: "Medicinal plant for skin treatment.",
    cost: 15,
    image: aloeVeraImg,
  },
  {
    id: 3,
    name: "Monstera",
    category: "Decorative Plants",
    description: "A beautiful houseplant for indoor decoration.",
    cost: 25,
    image: monsteraImg,
  },
  {
    id: 4,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    description: "A plant that improves air quality indoors.",
    cost: 18,
    image: snakePlantImg,
  },
  {
    id: 5,
    name: "Cactus",
    category: "Low Maintenance Plants",
    description: "A hardy plant that requires little water.",
    cost: 12,
    image: cactusImg,
  },
  {
    id: 6,
    name: "Fern",
    category: "Moisture Loving Plants",
    description: "Thrives in humid environments, perfect for bathrooms.",
    cost: 14,
    image: fernImg,
  },
];

const categories = [
  {
    name: "Aromatic Plants",
    description:
      "These plants emit pleasant scents that can help with relaxation and aromatherapy.",
  },
  {
    name: "Medicinal Plants",
    description:
      "Plants known for their healing properties, often used in herbal medicine.",
  },
  {
    name: "Decorative Plants",
    description: "Houseplants that enhance the aesthetic of indoor spaces.",
  },
  {
    name: "Air Purifying Plants",
    description:
      "These plants improve air quality by filtering toxins from the environment.",
  },
  {
    name: "Low Maintenance Plants",
    description: "Perfect for beginners, requiring minimal watering and care.",
  },
  {
    name: "Moisture Loving Plants",
    description:
      "Ideal for humid areas like bathrooms, these plants thrive in moisture-rich environments.",
  },
];

const ProductListing = ({ addToCart }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (plant) => {
    setCartItems([...cartItems, plant]);
    addToCart(plant);
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Our Plants</h2>
      <div className="row">
        {categories.map(({ name, description }) => {
          const categoryPlants = products.filter(
            (plant) => plant.category === name
          );
          if (categoryPlants.length === 0) return null; // Skip empty categories

          return (
            <div key={name} className=" col-md-4 mb-2">
              <h3 className="mt-4">{name}</h3>
              <p>{description}</p> {/* Category description */}
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {" "}
                {/* Ensures three columns per row */}
                {categoryPlants.map((plant) => (
                  <div className="col" key={plant.id}>
                    <PlantCard
                      plant={plant}
                      addToCart={handleAddToCart}
                      isAdded={cartItems.some((item) => item.id === plant.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
