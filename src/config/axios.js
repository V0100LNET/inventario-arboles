import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: 'https://back-igs.herokuapp.com/'
})


export default clienteAxios;




