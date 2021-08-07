import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({label, checked, handleChange, disabled}) => {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    disabled={disabled}
                />
               {label}
            </label>
        </div>
    )
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    handleChange: PropTypes.func,
};

export default Checkbox;