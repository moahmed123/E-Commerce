import axios from 'axios';
export const getProducts = () => (dispatch) => {

  const urlAllData = "http://localhost:8020/products";
  return axios.get(urlAllData)
    .then((response) => { console.log(response) })
    .catch((error) => {
      console.log(error.message);
    });
}