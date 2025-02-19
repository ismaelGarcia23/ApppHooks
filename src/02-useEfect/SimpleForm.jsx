import { useEffect, useState } from "react";
import Message from "./Message";



export default function SimpleForm() {

    const [formState, setFormState] = useState({
        name: 'spider',
        email: 'ismaelhernan1237@gmail.com'
    })

    const {name, email} = formState;

    const onInputChange = ({target}) => {
        const{name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('UseEfect called')
    }, [])

    return (
        <>
            <h1 className="text-2xl font-bold">Formulario Simple</h1>

            <hr />
           <div className="mt-4">
           <label htmlFor="username" className="block text-sm font-semibold text-gray-700 py-2">
                Username
            </label>

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
           </div>

           {
            (name === 'pedro') && <Message />
           }
        </>
    )
}
