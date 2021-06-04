import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: 'https://test-igs.herokuapp.com/'
    // baseURL: ' http://127.0.0.1:5500/'
})


export default clienteAxios;




