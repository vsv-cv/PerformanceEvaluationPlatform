import React, { useState } from "react";
import {
    Button,
    ButtonType,
    ButtonSize,
    ButtonTheme,
} from "./Button";
import { Input } from "./Input"


function InputButtonIconButon() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
    };

    return (
        <div className='buttons'>
            <div>
                <Button
                    disabled
                    size={ButtonSize.LARGE}
                    theme={ButtonTheme.ROUNDED}
                    icon="fa fa-user fa-lg fa-fw"
                >
                    Button
                </Button>
            </div>
            <div>
                <Button
                    type={ButtonType.BUTTON}
                    size={ButtonSize.LARGE}
                    theme={ButtonTheme.PRIMARY}
                    icon="fa fa-user fa-lg fa-fw"
                >
                    Button
                </Button>
            </div>
            <div>
                <Button iconType size={ButtonSize.LARGE} icon="fa fa-user fa-lg fa-fw">Text</Button>
            </div>
            <div>
                <Button icon="fa fa-user fa-lg fa-fw" size={ButtonSize.MEDIUM} theme={ButtonTheme.SECONDARY}>
                    Button
                </Button>
            </div>
            <div>
                <Button size={ButtonSize.MEDIUM} theme={ButtonTheme.SUCCESS}>
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
        </div>
    );
}

export default InputButtonIconButon;
