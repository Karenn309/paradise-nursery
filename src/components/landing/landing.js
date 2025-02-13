import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImg from '../../assets/images/background.jpg'; // Ensure image exists

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 vw-100 text-white position-relative"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} // Adjust opacity if needed
      ></div>

      {/* Centered Content */}
      <div className="position-relative text-center d-flex flex-column justify-content-center align-items-center w-75">
        <h1 className="mb-3">Ms Karen Botanicals</h1>
        <p className="text-center">
          Welcome to Ms Karen Botanicals, where we bring you the finest selection of aromatic and medicinal plants. 
          Explore our collection and bring nature closer to your home!
        </p>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/products')}>
          View Products
        </button>
      </div>
    </div>
  );
};

export default Landing;
