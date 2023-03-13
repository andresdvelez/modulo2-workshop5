import React from "react";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import serpentinas from "../../assets/serpentinas.png";

function Status() {
  return (
    <div className="w-screen h-screen bg-neutral-500 bg-no-repeat lg:flex lg:items-center lg:justify-center">
    <section className="bg-main-bg px-4 py-10 flex flex-col items-center">
      <div className="bg-white w-full h-60 mb-7 relative">
        <img
          src={serpentinas}
          alt=""
          className="w-32 absolute top-1/4 right-1/4"
        />
        <AiFillCheckCircle className="absolute top-1/4 right-1/4 text-green-600 text-9xl animate-[ping_0.8s_ease-in-out_normal]" />
      </div>
      <div>
        <p className="text-center font-bold text-2xl mb-3">
          Tu pedido está en proceso
        </p>
        <p className="text-center text-xs text-gray-500 mb-40">
          Serás notificado cuando llegue el repartidor
        </p>
      </div>
      <Link
        to="/"
        className="bg-[#E50062] text-center w-full text-slate-50 py-3 rounded-md shadow-lg shadow-red-400"
      >
        Aceptar
      </Link>
    </section>
    </div>
  );
}

export default Status;
