import React from 'react';

const FetchSimpsons = async () => {
  let results = await fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=10');
  results = await results.json();
  return results;
};

export default FetchSimpsons;
