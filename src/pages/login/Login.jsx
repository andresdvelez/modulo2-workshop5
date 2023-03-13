import React, { useState } from "react";
import FormLogin from "../../components/forms/FormLogin";
//import { FaPizzaSlice} from 'react-icons/fa';
import { IoPizzaOutline } from "react-icons/io5";
import Register from "../../components/forms/Register";

function Login() {
    const [show, setShow] = useState(true);

    const handleLogin = () => {
        setShow(true);
    };
    const handleRegister = () => {
        setShow(false);
    };
    return (
        <div
            className="bg-hero-pizza
              bg-no-repeat
              bg-cover
              h-screen 
              flex flex-col 
              items-center
              2xl:bg-hero-restaurant"
        >
            <div className="text-gray-200 mb-16">
                <figure className="rotate-[230deg]  mb-3">
                    <IoPizzaOutline className="text-9xl " />
                </figure>
                <p className="text-2xl font-TiltWarp">PiSassScript</p>
            </div>
            {show ? (
                <>
                    <FormLogin />
                    <p className="text-gray-200 mb-4 mt-2 cursor-pointer">
                        Restablecer contraseña
                    </p>
                    <div className="flex flex-col items-center">
                        <small className="text-[rgba(255,255,255,0.6)] text-xs">
                            ¿No tienes una cuenta?
                        </small>
                        <p
                            onClick={handleRegister}
                            className="text-gray-200 cursor-pointer"
                        >
                            Registrate aquí
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <Register />
                    <div className="flex flex-col items-center">
                        <small className="text-[rgba(255,255,255,0.6)] text-xs">
                            ¿Ya tienes una cuenta?
                        </small>
                        <p
                            onClick={handleLogin}
                            className="text-gray-200 cursor-pointer"
                        >
                            Ingresa aquí
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Login;
