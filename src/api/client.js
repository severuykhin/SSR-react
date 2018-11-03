import axios from 'axios';

class ApiClientConstructor {

    async getUsers () {
        const response = await axios.get('http://react-ssr-api.herokuapp.com/users');
        return response.data;
    }
}

export const ApiClient = new ApiClientConstructor();