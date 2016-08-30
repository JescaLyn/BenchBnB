import React from 'react';
import BenchMap from '../bench/bench_map';
import BenchIndex from '../bench/bench_index';

const Search = ({ benches, requestBenches, updateBounds }) => (
  <div>
    <BenchMap benches={benches} updateBounds={updateBounds}/>
    <BenchIndex requestBenches={requestBenches} benches={benches}/>
  </div>
);

export default Search;
