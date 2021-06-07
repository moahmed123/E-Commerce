import fetch from 'node-fetch';

export const getPro = () => (dispatch) => {
    const urlAllData = "http://localhost:8000";
    fetch(urlAllData).then(response => response.json())
        .then(res => {
            console.log(res)
            dispatch({ type: "RESPONS_PRODUCT_DATA", payload: res })
        })
}