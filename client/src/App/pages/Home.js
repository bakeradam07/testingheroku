

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProfileJumbo from "../components/ProfileJumbo";

import "./profileStyle.css";

class Home extends Component {

  
  render() {
    return (
    <div className="App">
      <h1>A Night In!</h1>

      <Link to={'./users'}>
        <button variant="raised">
            Users
        </button>
      </Link>

      <Link to={'./movies'}>
        <button variant="raised">
            Movies
        </button>
      </Link>
      <Link to={'./profile'}>
        <button variant="raised">
            Profile
        </button>
      </Link>

      <Link to={'./drinks'}>
        <button variant="raised">
            Drinks
        </button>
      </Link>

      <ProfileJumbo>
        <div id = "img-swap">
      <img class="char-img sober" src="./Sober.PNG" />
      <img class="char-img soberDrink" src="./SoberDrink.png" />
      <img class="char-img drinking" src="./Drinking.png" />
      <img class="char-img tipsy" src="./Tipsy.png" />
      <img class="char-img tipsyDrink" src="./TipsyDrink.png" />
      <img class="char-img drinking-two" src="./Drinking.png" />
      <img class="char-img drunk" src="./Drunk.png" />
      <img class="char-img drunkDrink" src="./DrunkDrink.png" />
      <img class="char-img drinking-three" src="./Drinking.png" />
      <img class="char-img cold" src="./OutCold.png" />
      </div>

      </ProfileJumbo>

    </div>
    );
  }
}
export default Home;

