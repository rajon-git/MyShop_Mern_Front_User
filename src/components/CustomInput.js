import React from 'react'

function CustomInput(props) {
    const { type, name, placeholder, classname,value, onChange, onBlur,disabled } = props;
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={`form-control ${classname}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
            />
        </div>
    )
}

export default CustomInput