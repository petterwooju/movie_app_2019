import React from 'react'

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const foodILike = [
  {
    name: "kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2014/06/kimchi_cabbagesalting.jpg"
  },
  {
    name: "kimchi_two",
    image: "http://res.heraldm.com/content/image/2013/08/23/20130823000927_0.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
