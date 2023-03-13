import React, { useEffect, useState } from "react";
import Carussel from "../../components/carussel/Carussel";
import axios from "axios";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                "https://back-worksop5-production.up.railway.app/pizzas"
            );
            setPizzas(response.data);
            console.log(response.data);
        }
        fetchData();
    }, []);

    const pizzasHawaiana = pizzas.find((pizza) => pizza.id === "1");
    const pizzasMargherita = pizzas.find((pizza) => pizza.id === "2");
    const pizzasNapolitana = pizzas.find((pizza) => pizza.id === "3");
    const pizzasEspañola = pizzas.find((pizza) => pizza.id === "4");

    return (
        <>
            <div className=" flex flex-col mb-10 p-10 gap-5 ">
                {pizzasHawaiana && (
                    <Carussel
                        images={pizzasHawaiana.images}
                        name={pizzasHawaiana.name}
                        price={pizzasHawaiana.price}
                    />
                )}
                {pizzasMargherita && (
                    <Carussel
                        images={pizzasMargherita.images}
                        name={pizzasMargherita.name}
                        price={pizzasMargherita.price}
                    />
                )}
                {pizzasNapolitana && (
                    <Carussel
                        images={pizzasNapolitana.images}
                        name={pizzasNapolitana.name}
                        price={pizzasNapolitana.price}
                    />
                )}
                {pizzasEspañola && (
                    <Carussel
                        images={pizzasEspañola.images}
                        name={pizzasEspañola.name}
                        price={pizzasEspañola.price}
                    />
                )}
            </div>
        </>
    );
};

export default Home;
