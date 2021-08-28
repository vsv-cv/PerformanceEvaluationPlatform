import React, { useState } from "react";
import {
    Button,
    ButtonType,
    ButtonSize,
    ButtonTheme,
} from "./Button";
import { Errors } from "./Errors/Errors";
import { Input } from "./Input"
import { Toaster } from "./Toaster";
import { useToastsContext } from './../../hooks/useToastsContext';



let errors = [
    {
        id: 1,
        icon: 'fa fa-user fa-lg fa-fw',
        message: '11111',
        time: '1000',
        type: 'error',
    },
    {
        id: 3,
        icon: 'fa fa-user fa-lg fa-fw',
        message: '3333',
        time: '3000',
        type: 'success',
    },
    {
        id: 5,
        icon: 'fa fa-user fa-lg fa-fw',
        message: '5555',
        time: '5000',
        type: 'warning',
    },
    {
        id: 7,
        icon: 'fa fa-user fa-lg fa-fw',
        message: '11111',
        time: '1000',
        type: 'error',
    },
    {
        id: 8,
        icon: 'fa fa-user fa-lg fa-fw',
        message: '111111',
        handleClick: true,
        type: 'success',
    },
]

function Example() {
    const { addToast, toastsList, deleteToastOnClick, deleteToastOnSetTime} = useToastsContext();
    const [name, setName] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
    };

    return (
        <div className='buttons'>
            <Toaster
                toasts={toastsList}
                deleteToastOnClick={deleteToastOnClick}
                deleteToastOnSetTime={deleteToastOnSetTime} 
            />
            <div>
                <Button  icon="fa fa-user fa-lg fa-fw" iconType size={ButtonSize.SMALL} theme={ButtonTheme.SUCCESS}>
                    Button
                </Button>
            </div>
            <div className='size'>
                <Button
                    size={ButtonSize.SMALL}
                    theme={ButtonTheme.SUCCESS}
                    icon="fa fa-user fa-lg fa-fw"
                >
                    Button
                </Button>
            </div>
            <div>
                <Button iconType icon="fa fa-user fa-lg fa-fw" size={ButtonSize.MEDIUM} theme={ButtonTheme.SECONDARY}>
                    Button
                </Button>
            </div>
            <div className='size'>
                <Button
                    type={ButtonType.BUTTON}
                    size={ButtonSize.MEDIUM}
                    theme={ButtonTheme.SECONDARY}
                    icon="fa fa-user fa-lg fa-fw"
                >
                    Button
                </Button>
            </div>
            <div>
                <Button iconType icon="fa fa-user fa-lg fa-fw" size={ButtonSize.LARGE} theme={ButtonTheme.PRIMARY}>
                    Button
                </Button>
            </div>
            <div>
                <Button onClick={() => addToast({
                    id: 7,
                    icon: 'fa fa-user fa-lg fa-fw',
                    message: '11111',
                    time: '1000',
                    type: 'error',
                })} className='size' theme={ButtonTheme.PRIMARY}  size={ButtonSize.LARGE} icon="fa fa-user fa-lg fa-fw">Button</Button>
            </div>
            <div className='size'>
                <Input
                    type="number"
                    label="Name"
                    value={name}
                    handleChange={handleChange}
                    icon="fa fa-user fa-lg fa-fw"
                />
            </div>
            <div>
                <Input
                    disabled
                    required
                    type="number"
                    name="name"
                    value={name}
                    label="Name"
                    handleChange={handleChange}
                    icon="fa fa-user fa-lg fa-fw"
                />
            </div>
            <div>
                <Errors errors={errors}/>
            </div>
        </div>
    )
}

export default Example;
