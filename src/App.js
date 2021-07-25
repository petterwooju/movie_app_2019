import React from 'react'
import Proptypes from 'prop-types'

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2014/06/kimchi_cabbagesalting.jpg",
    rate: 3.4
  },
  {
    id: 2,
    name: "kimchi_two",
    image: "http://res.heraldm.com/content/image/2013/08/23/20130823000927_0.jpg",
    rate: 4.5
  }
];

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

Food.propTypes ={
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rate}
        />
      ))}
    </div>
  );
}

export default App;
