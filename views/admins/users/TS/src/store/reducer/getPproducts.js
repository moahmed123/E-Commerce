// @flow


const INIT_STATE = false; 

const getPproducts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "RESPONS_PRODUCT_DATA":
      return {
        ...state,
        dataPro: action.payload
      };
   
      default:
      return state;
  }
};

export default getPproducts;
