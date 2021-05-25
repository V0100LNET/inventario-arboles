import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: 'https://test-igs.herokuapp.com/'
})


export default clienteAxios;




