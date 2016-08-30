export const BenchConstants = {
  RECEIVE_BENCHES: "RECEIVE_BENCHES",
  REQUEST_BENCHES: "REQUEST_BENCHES",
  CREATE_BENCH: "CREATE_BENCH",
  RECEIVE_BENCH: "RECEIVE_BENCH"
};

export const requestBenches = () => ({
  type: BenchConstants.REQUEST_BENCHES
});

export const receiveBenches = (benches) => ({
  type: BenchConstants.RECEIVE_BENCHES,
  benches
});

export const createBench = (bench) => ({
  type: BenchConstants.CREATE_BENCH,
  bench
});

export const receiveBench = (bench) => ({
  type: BenchConstants.RECEIVE_BENCH,
  bench
});
