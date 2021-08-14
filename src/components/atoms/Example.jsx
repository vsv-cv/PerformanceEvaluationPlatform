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

const errors = [
    { id: 1, message: 'Error', handleClick: true, type: 'error' },
    { id: 2, message: 'This is a success toast component', handleClick: true, type: 'info' },
    { id: 3, message: '1111111', time: '1000' , type: 'success' },
    { id: 5, message: '222222222', time: '1000' , type: 'warning' },
    { id: 7, message: '33333333', time: '1000' , type: 'error' },
    { id: 8, message: '4444444', time: '2000' , type: 'success' },
  ]

function InputButtonIconButon() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
    };

    return (
        <div className='buttons'>
            <Toaster toasts={errors} />
            <div>
                <Button
                    disabled
                    size={ButtonSize.SMALL}
                    theme={ButtonTheme.ROUNDED}
                    icon="fa fa-user fa-lg fa-fw"
                >
                    Button
                </Button>
            </div>
            <div>
                <Button
                    type={ButtonType.BUTTON}
                    size={ButtonSize.SMALL}
                    theme={ButtonTheme.PRIMARY}
                    icon="fa fa-user fa-lg fa-fw"
                >
                    Button
                </Button>
            </div>
            <div>
                <Button iconType size={ButtonSize.SMALL} icon="fa fa-user fa-lg fa-fw">Text</Button>
            </div>
            <div>
                <Button icon="fa fa-user fa-lg fa-fw" size={ButtonSize.SMALL} theme={ButtonTheme.SECONDARY}>
                    Button
                </Button>
            </div>
            <div>
                <Button size={ButtonSize.SMALL} theme={ButtonTheme.SUCCESS}>
                    Button
                </Button>
            </div>
            <Input
                label="Name"
                value={name}
                handleChange={handleChange}
                icon="fa fa-user fa-lg fa-fw"
            />
            <Input
                disabled
                required
                type="text"
                name="name"
                value={name}
                label="Name"
                handleChange={handleChange}
                icon="fa fa-user fa-lg fa-fw"
            />
            <div>
                <Errors errors={errors}/>
            </div>
        </div>
    )
}

export default InputButtonIconButon;
