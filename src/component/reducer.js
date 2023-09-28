export const fetchProductsData = (state = {}, action) => {
  switch (action.type) {
    case "products api":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
