import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";





export default function FormWithCustomHooks() {

    const {formState, onInputChange, onResetForm, name, email, password} = useForm({
        name: '',
        email: '',
        password: ''
    });

  


    return (
        <>
            <h1 className="text-2xl font-bold">Formulario con Custom Hook</h1>

            <hr />
           <div className="mt-4">
           
            <input
                type="text"
                className="flex-1 block w-full min-w-0 px-3 py-2 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Nombre"
                name="name"
                value={name}
                onChange={onInputChange}
            />
            <input
                type="text"
                className=" mt-2 flex-1 block w-full min-w-0 px-3 py-2 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                placeholder="ismaelhernan1237@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className=" mt-2 flex-1 block w-full min-w-0 px-3 py-2 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />
           </div>

           <button onClick={onResetForm} className="mt-4 py-2 px-5 bg-red-600 text-white font-semibold rounded shadow-md focus:outline-none">
                Borrar
           </button>

           {
            (name === 'pedro') && <Message />
           }
        </>
    )
}
