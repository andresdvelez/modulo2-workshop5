import React from "react";

//Icons
import { IoIosArrowBack } from "react-icons/io";

function CarShop() {
  return (
    <section className="bg-sky-500/100 flex flex-col">
      <header>
        <IoIosArrowBack />
        <p>Carrito de compras</p>
      </header>
      <div>
        <img src="" />
        <div>
          <p>Master CSS Pizza</p>
          <div>
            <strong>x2</strong>
            <strong>$178</strong>
          </div>
        </div>
      </div>
      <div>
        <h2>Información de pago</h2>
        <label htmlFor="name">Nombre complet</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          aria-label="Nombre completo"
          id="name"
        />
        <label htmlFor="cardNumber">Número de Tarjeta de crédito</label>
        <input
          type="text"
          placeholder="1234 1234 1234 1234"
          aria-label="Número de Tarjeta de crédito"
          id="cardNumber"
        />
        <div>
          <label htmlFor="dueDate">Fecha vencimiento</label>
          <input
            type="text"
            placeholder="MM/YY"
            aria-label="Fecha vencimiento"
            id="dueDate"
          />
          <label htmlFor="cvv">CVV</label>
          <input type="text" placeholder="000" aria-label="CVV" id="cvv" />
        </div>
        <label htmlFor="address">Dirección</label>
        <input
          type="text"
          placeholder="Av. Anaconda #123"
          aria-label="Dirección"
          id="address"
        />
      </div>
    </section>
  );
}

export default CarShop;
