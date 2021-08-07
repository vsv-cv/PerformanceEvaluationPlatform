import React from 'react';
import PropTypes from 'prop-types'

const Textarea = ({value, handleChange, disabled}) => {
    return (
        <textarea
            value={value}
            disabled={disabled}
            onChange={handleChange}
        >
        </textarea>
    )
};

Textarea.propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
}

export default Textarea;