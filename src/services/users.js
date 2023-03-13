import axios from "axios";
//END POINT USERS
const URL_API_USERS = "https://back-worksop5-production.up.railway.app/Users";
const URL_API_PIZZAS = "https://back-worksop5-production.up.railway.app/pizzas";
export const getApiUsers = async () => {
    try {
        const { data } = await axios.get(URL_API_USERS);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getApiPizzas = async () => {
    try {
        const { data } = await axios.get(URL_API_PIZZAS);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const postNewUser = async (newUser) => {
    try {
        await axios.post(URL_API_USERS, newUser);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
