import React from 'react';

const FetchSimpsons = async () => {
  let results = await fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=10');
  let data = await results.json();
  return data;
};

export default FetchSimpsons;
