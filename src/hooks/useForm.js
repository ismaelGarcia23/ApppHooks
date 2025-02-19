import { useState } from "react";


export const useForm = (initialForms = {}) => {

     const [formState, setFormState] = useState(initialForms);
    
        
    
        const onInputChange = ({target}) => {
            const{name, value} = target;
            setFormState({
                ...formState,
                [name]: value
            })
        }
    
        const onResetForm = () => {
            setFormState(initialForms);
        }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}