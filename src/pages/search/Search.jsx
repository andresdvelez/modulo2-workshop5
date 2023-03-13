import React, { useEffect, useState } from "react";
import Carussel from "../../components/carussel/Carussel";
import { BiSearch } from "react-icons/bi";
import { IoPizzaOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { getApiPizzas } from "../../services/users";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResultsCount, setSearchResultsCount] = useState(0);
    const navigate = useNavigate();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.5,
                staggerDirection: -1,
            },
        },
    };

    const getPizza = async () => {
        const response = await getApiPizzas();
        setPizzas(response);
        setSearchResultsCount(filteredPizzas.length);
    };

    useEffect(() => {
        getPizza();
        const filteredPizzas = pizzas.filter((pizza) =>
            pizza.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResultsCount(filteredPizzas.length);
    }, [searchQuery, pizzas]);

    const filteredPizzas = pizzas.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // const handleClick = () => {
    //     navigate("/");
    // };

    // navigate(`/pizza/${JSON.stringify(pizza)}`);

    return (
        <>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                id="top"
                className="flex flex-col bg-slate-200 p-10 gap-5 h-[1620px] "
            >
                <section className="flex mt-10  rounded p-1 items-center w-full bg-white justify-between relative">
                    <input
                        className=" border-none outline-0  rounded h-8 w-full"
                        type="text"
                        placeholder="Buscar pizza"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <BiSearch className="absolute  right-2 text-xl" />
                </section>
                {searchQuery && (
                    <span className="text-2xl font-bold mt-1">
                        {searchResultsCount} resultados encontrados
                    </span>
                )}

                <figure className=" flex flex-col gap-4 absolute w-full right-0 items-center top-36">
                    <IoPizzaOutline className="text-9xl mt-14 rotate-[230deg] text-gray-500" />
                    <span>Busca la Pizza que mas te gusta</span>
                </figure>

                {searchQuery && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {filteredPizzas.map((pizza) => (
                            <Carussel
                                key={pizza.id}
                                images={pizza.images}
                                name={pizza.name}
                                price={pizza.price}
                            />
                        ))}
                    </motion.div>
                )}
            </motion.div>
        </>
    );
};

export default Home;
