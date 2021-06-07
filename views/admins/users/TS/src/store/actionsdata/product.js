import axios from 'axios';

//Publish 
export  const publishFieldsVals = () => (dispatch) => {       
    axios({
        method: 'post',
        url: "http://localhost:8000/products"      
    }).then((success) => {
        console.log(success);
    })
}