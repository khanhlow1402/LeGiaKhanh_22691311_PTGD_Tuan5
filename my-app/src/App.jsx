import React from "react";
import "./index.css";
import logo from './assets/logovip.png'
import avt from './assets/avatar.png'
import h1 from './assets/avacador_salad.png'
import h2 from './assets/Bean, shrimp, and potato salad.png'
import h3 from './assets/Vegetable and shrimp spaghetti.png'
import h4 from './assets/Italian-style tomato.png'
import h6 from './assets/Salad with cabbage.png'
import h8 from './assets/Snack cakes.png'
import h9 from './assets/Sunny-side up fried eggs.png'
import h10 from './assets/Lotus delight salad.png'

 const data = [
  {
    image: h1,
    title: 'Avacador Salad',
    time: '14 minutes'
  },
  {
    image: h2,
    title: 'Bean, shrimp, and potato salad',
    time: '15 minutes'
  },
  {
    image: h3,
    title: 'Vegetable and shrimp spaghetti',
    time: '20 minutes'
  },
  {
    image: h4 ,
    title: 'Italian style tomato',
    time: '21 minutes'
  },

  {
    image: h6,
    title: 'Salad with cabbage',
    time: '32 minutes'
  },
 
  {
    image: h8,
    title: 'Snack cakes',
    time: '31 minutes'
  },
  {
    image: h9,
    title: 'Sunny side up fried eggs',
    time: '30 minutes'
  },
  {
    image: h10,
    title: 'Lotus delight salad',
    time: '33 minutes'
  }

 ]
function App() {

 
  return (
    
    <div className="container m-0 p-0 box-border grid">
      <header className="header flex justify-around">
        <div className="logo flex items-center text-pink-600 font-bold text-xl">
          <img src={logo} alt="Logo"  className="w-1/4 mr-2"/>
          <h2>Chefify</h2>
        </div>
        <div className="search-box flex items-center h-10 bg-gray-200 pr-24 mt-1">
          <input type="text" className="search-input bg-transparent text-base" defaultValue="cakescascsa" placeholder="Search..." />
        </div>
        <nav>
          <ul className="menu flex items-center mt-4">
            <li><a href="#">What to cook</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Ingredients</a></li>
            <li><a href="#">Occasions</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <div className="user flex items-center">
          <a href="#" className="box bg-red-100 text-pink-500 rounded-lg p-2 no-underline"> Your Recipe Box</a>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="profile-img" />
        </div>
      </header>
      <main>
      <div className="top w-4/5 m-auto mt-12">
      <h2 className="profile-title text-2xl font-bold mb-4 pb-5">Emma Gonzalez's Recipe Box</h2>
      <div className="profile-content flex items-center">
        <img src={avt} className="profile-image"/>
        <div className="profile-text">
          <p className="pb-4">
            Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </p>
          <div className="profile-actions flex mt-10 items-center">
            <span className="subscribers font-bold mr-4">6.5k Subscribes</span>
            <button className="share-btn text-white cursor-pointer text-sm">Share ↗</button>
          </div>
        </div>
      </div>
        </div>
        <div className="bot flex flex-wrap w-4/5 m-auto justify-between pt-12 mb-12">
        {data.map((food) => (
             <div className="food h-auto">
             <div className="food-image w-full h-auto">
                 <img src={food.image} alt={food.title} />
             </div>
             <div className="food-content">
                 <div className="input-recipe">
                     <h3 className="food-title mb-5">{food.title}</h3>
                 
                 </div>           
                 
                 <div className="food-footer">
                     <span className="food-time rounded bg-pink-200 text-xs text-pink-500">{food.time} minutes</span>
                 </div>
             </div>
       </div>
        ))}
        </div>
      </main>
      <footer className="footer bg-gray-900 flex p-8 justify-between">
        <div className="footer1">
          <h3 className="text-base font-bold mb-2">About Us</h3>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <div className="email-box flex items-center mt-2">
            <input type="email" placeholder="Enter your email" className="p-2 rounded mr-2" />
            <button className="bg-pink-500 text-white rounded cursor-pointer text-sm">Send</button>
          </div>
          <div className="end flex items-center mt-12">
            <h2>Chefify</h2>
            <p>2023 Cheffy Company</p>
            <div className="vip flex mt-2">
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
          <div className="shop mt-8">
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
