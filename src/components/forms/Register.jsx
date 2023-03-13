import React from "react";
import { useForm } from "react-hook-form";
import { BiUser} from 'react-icons/bi';
import {BiLockAlt } from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi';
import {RxImage} from 'react-icons/rx';
import { postNewUser } from "../../services/users";
import Swal from 'sweetalert2'

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (formData) => {
        console.log(formData);
        await postNewUser({
            ...formData,
            auth: false,   
        })
        reset()
        Swal.fire('Excelente!',
        'Usuario registrado con exito!',
        'success');

    };




    return (
        <div>
        <h1 className="text-gray-200 text-2xl font-bold mb-5" >Registar Usuario</h1>

        <form className="flex flex-col gap-8 items-center " 
        onSubmit={handleSubmit(onSubmit)}>

        <div className="flex flex-row-reverse items-center border-b border-solid border-white w-80 ">
                <input className=" w-80  p-1 text-slate-50 bg-transparent   outline-0 placeholder:text-[rgba(255,255,255,0.6)]"
                    type="text"
                    placeholder="  Ingrese su nombre completo"
                    {...register("name", {
                    required: "El nombre es requerido",
                    })}
                    aria-invalid={errors.email ? true : false}
                />
                <figure className=" text-gray-200">
                    <BiUser  />
                </figure>
        </div>
            {errors.name && (
                <span>{errors.name?.message}</span>
            )}

            <div className="flex flex-row-reverse items-center border-b border-solid border-white w-80">
            <input className=" w-80  p-1 text-slate-50 bg-transparent   outline-0 placeholder:text-[rgba(255,255,255,0.6)]"
                type="email"
                placeholder="  Ingrese su email"
                {...register("email", {
                required: "El email es requerido",
                })}
                aria-invalid={errors.email ? true : false}
            />
            <figure className=" text-gray-200">
                    <HiOutlineMail  />
            </figure>
            </div>
            {errors.email?.type === "required" && (
                <span className="message--error">{errors.email?.message}</span>
            )}

            <div  className="flex flex-row-reverse items-center border-b border-solid border-white w-80">
            <input className=" w-80  p-1 text-slate-50 bg-transparent   outline-0 placeholder:text-[rgba(255,255,255,0.6)]"
                type="text"
                placeholder="  Ingrese la URL de la imagen "
                {...register("image", {
                required: true,
                })}
                />
            <figure className=" text-gray-200">
                <RxImage  />
            </figure>
            </div>
            {errors.confirmPassword && (
                <span className="message--error">
                {errors.confirmPassword.message}
                </span>
            )}

            <div className="flex flex-row-reverse items-center border-b border-solid border-white w-80">
            <input className=" w-80  p-1 text-slate-50 bg-transparent   outline-0 placeholder:text-[rgba(255,255,255,0.6)]"
                placeholder="  Ingrese su contraseña"
                type="password"
                {...register("password", {
                required: true,
                })}
            />
            <figure className=" text-gray-200">
                    <BiLockAlt   />
            </figure>
            </div>
            {errors.password && (
                <span className="message--error">{errors.password.message}</span>
            )}
        
            <button className="w-80 bg-gray-200 rounded p-2 font-semibold mb-5" type="submit">Registrarse</button>
            
        </form>
        </div>
    );
};

export default Register;