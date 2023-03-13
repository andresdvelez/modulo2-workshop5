import React, { useState } from "react";
import { useForm } from "react-hook-form";

//Icons
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function CarShop() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const [numInputValue, setNumInputValue] = useState("");

  const onSubmit = () => {
    navigate("/status");
  };

  const formatCardNum = (e) => {
    let inputValue = e.target.value;
    inputValue.toString();

    const newInputValue = inputValue
      .replace(/\s/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();
    setNumInputValue(newInputValue);
  };

  const formatDueDate = ({ target }) => {
    let slash = false;
    if (target.value.split("").length === 2 && !slash) {
      target.value = target.value + "/";
      slash = true;
    } else if (target.value.split("").length === 1) {
      slash = false;
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <h2 className="font-bold">Información de pago</h2>
        <label>
          <span>Nombre completo</span>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            aria-label="Nombre completo"
            id="name"
            className="p-3 w-full"
            {...register("fullname", {
              required: "Este campo es requerido",
              pattern: /[A-z]/g,
            })}
          />
          {errors.fullname ? (
            <span className="text-red-500 text-sm">
              {errors.fullname.message}
            </span>
          ) : (
            ""
          )}
        </label>

        <label>
          <span>Número de Tarjeta de crédito</span>
          <input
            type="text"
            placeholder="1234 1234 1234 1234"
            aria-label="Número de Tarjeta de crédito"
            id="cardNumber"
            className="p-3 w-full"
            {...register("cardNum", {
              required: "Este campo es requerido",
            })}
            onInput={(e) => formatCardNum(e)}
            value={numInputValue}
            maxLength="19"
          />
          {errors.cardNum ? (
            <span className="text-red-500 text-sm">
              {errors.cardNum.message}
            </span>
          ) : (
            ""
          )}
        </label>

        <div className="flex gap-3">
          <label>
            <span>Fecha vencimiento</span>
            <input
              type="text"
              placeholder="MM/YY"
              aria-label="Fecha vencimiento"
              id="dueDate"
              maxLength="5"
              className="p-3 w-full"
              onInput={formatDueDate}
              {...register("dueDate", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.dueDate ? (
              <span className="text-red-500 text-sm">
                {errors.dueDate.message}
              </span>
            ) : (
              ""
            )}
          </label>

          <label>
            <span>CVV</span>
            <input
              type="text"
              placeholder="000"
              aria-label="CVV"
              id="cvv"
              maxLength="3"
              className="p-3 w-full"
              {...register("cvv", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.cvv ? (
              <span className="text-red-500 text-sm">{errors.cvv.message}</span>
            ) : (
              ""
            )}
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
            {...register("address", {
              required: "Este campo es obligatorio",
            })}
          />
          {errors.address ? (
            <span className="text-red-500 text-sm">
              {errors.address.message}
            </span>
          ) : (
            ""
          )}
        </label>
        <button
          className="bg-[#E50062] text-slate-50 py-3 rounded-md shadow-lg shadow-red-400"
          type="submit"
        >
          Pagar Ahora
        </button>
      </form>
    </section>
  );
}

export default CarShop;
