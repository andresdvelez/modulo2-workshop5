import React, { useEffect, useState } from "react";
import Carussel from "../../components/carussel/Carussel";
import { getApiPizzas } from "../../services/users";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    const getPizza = async () => {
        const response = await getApiPizzas();
        setPizzas(response);
    };

    useEffect(() => {
        getPizza();
    }, []);



    return (
        <>
            <div className=" flex flex-col p-10 ">
                {
                    pizzas.map((pizzaObject, index) => (
                    <Carussel
                    images={pizzaObject.images}
                    name={pizzaObject.name}
                    price={pizzaObject.price}
                    id={pizzaObject.id}
                    key={index}
                />
                ))
                }

            </div>
        </>
    );
};

export default Home;
