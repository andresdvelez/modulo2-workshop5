import React, { useContext, useEffect, useState }  from "react";
import { useForm } from "react-hook-form";
import { BiUser} from 'react-icons/bi';
import {BiLockAlt } from 'react-icons/bi';
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {getApiUsers} from '../../services/users'



function FormLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [listInfo, setListInfo] = useState([]);
    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext)



    const onSubmit = (data) => {
        const userToLog = listInfo.find(user => user.email === data.email && String(user.password)  === data.password )
        if (userToLog) {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: userToLog,
            })
            navigate("/")
        }
    }
    const getUser = async () => {
        const response = await getApiUsers();
        setListInfo(response);
    };
    
    useEffect(() => {
        getUser();
        
    }, []);

    return(
        <div className="flex flex-col items-center">
                <div className="w-80">
                    <h1 className="text-gray-200 text-2xl font-bold">Inicia sesión en tu cuenta</h1>
                    <p className="text-[rgba(255,255,255,0.6)] mb-9">Disfruta de la mejor Pizza creada para las personas amantes del Código</p>
                </div>
                <form  className="flex flex-col gap-8 items-center "
                onSubmit={handleSubmit(onSubmit)} 
                    >
                    <div className="flex flex-row-reverse items-center border-b border-solid border-white w-80 ">

                                <input className=" w-80  p-1 text-slate-50 bg-transparent   outline-0 placeholder:text-[rgba(255,255,255,0.6)]"
                                    type="email"
                                    placeholder="  Usuario"
                                    {...register("email", {
                                    required: "El email es requerido",
                                    })}
                                    aria-invalid={errors.email ? true : false}
                                />
                                <figure className=" text-gray-200">
                                    <BiUser  />
                                </figure>
                    </div>
                                {errors.email?.type === "required" && (
                                    <span className="message--error">{errors.email?.message}</span>
                                )}
                    <div className="flex flex-row-reverse items-center border-b border-solid border-white w-80 ">
                                <input className="w-80  p-1 text-gray-200 bg-transparent   outline-0 placeholder:text-[rgba(255,255,255,0.6)]"
                                    type="password"
                                    placeholder="  Contraseña"
                                    {...register("password", {
                                    required: true,
                                    })}
                                />
                            <figure className=" text-gray-200">
                                    <BiLockAlt />
                            </figure>
                </div>
                    {errors.password && (
                        <span className="message--error">{errors.password.message}</span>
                    )}

                    <button className="w-80 bg-gray-200 rounded p-2 font-semibold" type="submit">Iniciar sesión</button>
                </form>

                
        </div>

    ) 
}

export default FormLogin;
