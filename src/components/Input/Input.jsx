import React, { Fragment } from 'react';
import './Input.css';

const Input = (props) => {
    const {
        type,
        name,
        placeholder,
        className,
        id,
        formilk,
        value
    } = props;

    return (
        <Fragment>
            <label htmlFor={id}>{placeholder}</label>
            <input
                type={type}
                id={id}
                autoComplete="off"
                className={className + " form-control"}
                name={name}
                placeholder={placeholder}
                {...formilk.getFieldProps(name)}
                value={value}
            />
        </Fragment>

    )
};

export default Input;