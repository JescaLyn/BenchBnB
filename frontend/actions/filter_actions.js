export const FilterConstants = {
  UPDATE_BOUNDS: "UPDATE_BOUNDS"
};

export const updateBounds = (bounds) => ({
  type: FilterConstants.UPDATE_BOUNDS,
  bounds
});
