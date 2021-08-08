import React, { useState } from "react";
import {
    Button,
    ButtonTheme,
    ButtonType,
    ButtonSize,
} from "./Button";
import { Input } from "./Input"
import {
    IconButton,
    IconTheme,
    IconType,
    IconSize,
} from "./IconButton";

function InputButtonIconButon() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
    };

    return (
        <div>
            <div>
                <IconButton
                    size={IconSize.SMALL}
                    typpe={IconType.BUTTON}
                    theme={IconTheme.DEFAULT}
                    icon="fa fa-user fa-lg fa-fw"
                />
            </div>
            <div>
                <Button form="circle" icon="fa fa-user fa-lg fa-fw"></Button>
            </div>
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
                    size={ButtonSize.MEDIUM}
                    theme={ButtonTheme.PRIMARY}
                    icon="fa fa-user fa-lg fa-fw"
                >
                    Button
                </Button>
            </div>
            <div>
                <Button size={ButtonSize.SMALL} theme={ButtonTheme.SECONDARY}>
                    Button
                </Button>
            </div>
            <div>
                <Button size={ButtonSize.SMALL} theme={ButtonTheme.SUCCESS}>
                    Button
                </Button>
            </div>
            <Input
                required
                type="text"
                name="name"
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
