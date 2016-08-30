import { connect } from 'react-redux';
import { requestBenches } from '../../actions/bench_actions';
import BenchIndex from './bench_index';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
