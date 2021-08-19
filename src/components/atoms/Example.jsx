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
    { id: 1, icon: 'fa fa-user fa-lg fa-fw', message: 'Error', handleClick: true, type: 'error' },
    { id: 2, icon: 'fa fa-user fa-lg fa-fw', message: 'This is a success toast component', handleClick: true, type: 'info' },
    { id: 3, icon: 'fa fa-user fa-lg fa-fw', message: '1111111', time: '1000' , type: 'success' },
    { id: 5, icon: 'fa fa-user fa-lg fa-fw', message: '222222222', time: '1000' , type: 'warning' },
    { id: 7, icon: 'fa fa-user fa-lg fa-fw', message: '33333333', time: '1000' , type: 'error' },
    { id: 8, icon: 'fa fa-user fa-lg fa-fw', message: '4444444', time: '2000' , type: 'success' },
  ]

function InputButtonIconButon() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
    };

    return (
        <div className='buttons'>
            {/* <Toaster toasts={errors} /> */}
            <div>
                <Button icon="fa fa-user fa-lg fa-fw" iconType size={ButtonSize.SMALL} theme={ButtonTheme.SUCCESS}>
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
                <Button className='size' theme={ButtonTheme.PRIMARY}  size={ButtonSize.LARGE} icon="fa fa-user fa-lg fa-fw">Button</Button>
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

export default InputButtonIconButon;
