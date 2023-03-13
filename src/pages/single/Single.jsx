import React, { useEffect, useState } from "react";
import Carussel from "../../components/carussel/Carussel";
import { getApiPizzas } from "../../services/users";
import { useParams } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import {AiOutlineMinus} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {AiTwotoneStar} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

function Single() {
  const [pizzas, setPizzas] = useState([]);

  const {id} = useParams();
  const navigate = useNavigate();


    const getPizza = async () => {
        const response = await getApiPizzas();
        setPizzas(response);
    };

    const handleCarShop = () => {
      navigate("/car");
    }


    useEffect(() => {
        getPizza();
    }, []);

    const pizza = pizzas.find((pizza) => pizza.id === id);
  

    return (
        <div className=" h-screen bg-pink-600  " >
            <div>
                {pizza && (
                    <Carussel
                        images={pizza.images}
                        name={pizza.name}
                        price={pizza.price}
                    />
                )}
            </div>

            <section className="absolute bg-zinc-700 top-[220px]
             px-3 rounded-b-2xl z-10 h-[350px] text-white w-full ">

            <div className="">
              <h1 className="text-2xl mt-3 mb-3 font-TiltWarp"> 
              Pizza {pizza && pizza.name}</h1>
              <div className="mb-3 flex gap-5">
                  <button className=" bg-pink-600 text-white  rounded-xl px-5 py-1 ">
                  ${pizza && pizza.price}
                  </button>
                  <button className=" bg-yellow-500 text-white  rounded-xl px-5 py-1 flex
                  items-center gap-1 ">
                  <AiTwotoneStar /> 455 reviews
                  </button>
              </div>
              <span className="font-TiltWarp">Descripción</span>
              <p className="mt-2" >{pizza && pizza.description}</p>
            </div>

            <div className=" flex items-center gap-5 mt-5">
              <figure>
                <img className="w-20 h-20 rounded-full object-cover " 
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" alt="mancita" />
              </figure>
              <div>
                <p className="font-TiltWarp">Laura Cardona</p>
                <div className="flex text-yellow-300">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                </div>
                Muy deli y excelente pizza
              </div>
            </div>
            </section>

            <div className="bg-pink-600 absolute top-[568px] w-full flex  gap-12 items-center h-[90px] justify-center text-xl "  >
              <div className="flex gap-5 items-center text-white cursor-pointer" >
                <span><AiOutlineMinus/></span>
                <span>1</span>
                <span><AiOutlinePlus/></span>
              </div>
                <button className="border p-1 rounded-lg cursor-pointer">
                        <FaShoppingBasket className=" text-white text-4xl" />
                </button>
                <button className="text-black bg-white p-1 rounded-lg " onClick={handleCarShop}  >
                        Pagar
                </button>

            </div>
        </div>
    );
}

export default Single