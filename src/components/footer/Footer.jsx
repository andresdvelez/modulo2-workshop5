import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="flex items-center p-5 rounded h-16 justify-between w-screen fixed bottom-0  bg-cover bg-white  z-50">
                <article className="flex gap-3 items-center">
                    <FiBookOpen />
                    <Link to={"/"}>
                        <button>Home</button>
                    </Link>
                </article>
                <figure className="flex bg-gray-900 rounded-full items-center p-4">
                    <button>
                        <FaShoppingBasket className=" text-white text-2xl" />
                    </button>
                </figure>
                <article className="flex gap-3 items-center">
                    <BiSearch />
                    <Link to={"/Search"}>
                        <button>Buscar</button>
                    </Link>
                </article>
            </section>
        </>
    );
};

export default Footer;
