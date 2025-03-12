import React from "react";
import { useEffect, useState } from "react";
import "./index.css";
import logo from './assets/logovip.png'
// import logo2 from './assets/archive_check.png'
 import avt from './assets/avatar.png'

function App() {

  const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  return (
    
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2>Chefify</h2>
        </div>
        <div className="search-box">
          <i className="fa fa-search"></i>
          <input type="text" className="search-input" defaultValue="cakescascsa" placeholder="Search..." />
        </div>
        <nav>
          <ul className="menu">
            <li><a href="#">What to cook</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Ingredients</a></li>
            <li><a href="#">Occasions</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <div className="user">
          <a href="#" className="box"> Your Recipe Box</a>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="profile-img" />
        </div>
      </header>
      <main>
      <div className="top">
      <h2 className="profile-title">Emma Gonzalez's Recipe Box</h2>
      <div className="profile-content">
        <img
          src={avt} 
          className="profile-image"
        />
        <div className="profile-text">
          <p>
            Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </p>
          <div className="profile-actions">
            <span className="subscribers">6.5k Subscribes</span>
            <button className="share-btn">Share ↗</button>
          </div>
        </div>
      </div>
        </div>
        <div className="bot">
          <div className={styles.productGrid}>
                  {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={styles.productImage}
                      />
                      <div className={styles.productInfo}>
                        <h3 className={styles.productTitle}>{product.name}</h3>
                        <span className={styles.productTime}>{product.time}</span>
                        <button className={styles.saveButton}>♡</button>
                      </div>
                    </div>
                  ))}
                </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer1">
          <h3>About Us</h3>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <div className="email-box">
            <input type="email" placeholder="Enter your email" />
            <button>Send</button>
          </div>
          <div className="end">
            <h2>Chefify</h2>
            <p>2023 Cheffy Company</p>
            <div className="vip">
              <a href="#" style={{ color: "white", textDecoration: "none" }}>Terms of Service | </a>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="footer1">
          <div className="learn">
            <h3>Learn More</h3>
            <a href="#">Our Cooks</a>
            <a href="#">See Our Features</a>
            <a href="#">FAQ</a>
          </div>
          <div className="shop">
            <h3>Shop</h3>
            <a href="#">Gift Subscription</a>
            <a href="#">Send Us Feedback</a>
          </div>
        </div>
        <div className="footer1">
          <h3>Recipes</h3>
          <a href="#">What to Cook This Week</a>
          <a href="#">Pasta</a>
          <a href="#">Dinner</a>
          <a href="#">Healthy</a>
          <a href="#">Vegetarian</a>
          <a href="#">Vegan</a>
          <a href="#">Christmas</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
