import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <section>
    <span>Description: {bench.description}</span>
    <span>Latitude: {bench.lat}</span>
    <span>Longitude: {bench.lng}</span>
  </section>
);

export default BenchIndexItem;
