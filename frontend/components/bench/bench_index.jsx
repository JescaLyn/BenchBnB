import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  render() {
    const allBenches = this.props.benches;
    const benches = Object.keys(allBenches).map(benchId => (
      <BenchIndexItem key={benchId} bench={allBenches[benchId]}/>
    ));

    return(
      <section>{benches}</section>
    );
  }

}

export default BenchIndex;
