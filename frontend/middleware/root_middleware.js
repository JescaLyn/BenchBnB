import { applyMiddleware } from 'redux';
import BenchesMiddleware from './benches_middleware';

export default applyMiddleware(
  BenchesMiddleware
);
