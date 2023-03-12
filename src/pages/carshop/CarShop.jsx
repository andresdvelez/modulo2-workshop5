import React from "react";

//Icons
import { IoIosArrowBack } from "react-icons/io";

function CarShop() {
  return (
    <section className="bg-main-bg flex flex-col gap-5 px-3 py-8">
      <header className="flex items-center gap-2 font-bold">
        <IoIosArrowBack className="text-xl" />
        <p className="text-lg">Carrito de compras</p>
      </header>
      <div className="rounded-md bg-white flex gap-3 items-center h-24 px-3 py-3">
        <img
          className="h-full w-1/5 rounded-md"
          src="https://images.pexels.com/photos/11230267/pexels-photo-11230267.jpeg?auto=compress+cs=tinysrgb+w=800"
          alt=""
        />
        <div className="flex flex-col justify-between h-full w-full">
          <p className="text-base">Master CSS Pizza</p>
          <div className="flex justify-between">
            <strong>x2</strong>
            <strong>$178</strong>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-3">
        <h2 className="font-bold">Información de pago</h2>
        <label>
          <span>Nombre completo</span>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            aria-label="Nombre completo"
            id="name"
            className="p-3 w-full"
          />
        </label>

        <label>
          <span>Número de Tarjeta de crédito</span>
          <input
            type="text"
            placeholder="1234 1234 1234 1234"
            aria-label="Número de Tarjeta de crédito"
            id="cardNumber"
            className="p-3 w-full"
          />
        </label>

        <div className="flex gap-3">
          <label>
            <span>Fecha vencimiento</span>
            <input
              type="text"
              placeholder="MM/YY"
              aria-label="Fecha vencimiento"
              id="dueDate"
              className="p-3 w-full"
            />
          </label>

          <label>
            <span>CVV</span>
            <input
              type="text"
              placeholder="000"
              aria-label="CVV"
              id="cvv"
              className="p-3 w-full"
            />
          </label>
        </div>
        <label htmlFor="address">
          <span>Dirección</span>
          <input
            type="text"
            placeholder="Av. Anaconda #123"
            aria-label="Dirección"
            id="address"
            className="p-3 w-full"
          />
        </label>
        <button
          className="bg-[#E50062] text-slate-50 py-3 rounded-md shadow-lg shadow-red-400 "
          type="submit"
        >
          Pagar Ahora
        </button>
      </form>
    </section>
  );
}

export default CarShop;
