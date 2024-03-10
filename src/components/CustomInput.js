import React from 'react'

function CustomInput(props) {
    const { type, name, placeholder, classname } = props;
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={`form-control ${classname}`}
            />
        </div>
    )
}

export default CustomInput