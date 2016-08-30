export const fetchBenches = (success, filters) => {
  $.ajax({
    method: "get",
    url: "/api/benches",
    data: filters,
    success,
    error: () => console.log("error")
  });
};

export const createBench = (success, bench) => {
  $.ajax({
    method: "post",
    url: "/api/benches",
    data: bench,
    success,
    error: () => console.log("error")
  });
};
