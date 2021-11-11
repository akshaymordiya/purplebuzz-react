import React, { useState } from 'react';

const useInputHandler = (initialState, type, arg) => {
    const [value, setValue] = useState(initialState);
    const [errors, setErrors] = useState([]);

    const sanitizeValueWithValidations = (value) => {
        if(arg.validationRules){
            const newErrors = [];
            arg.validationRules.forEach(rule => {
                if(typeof rule === 'object'){
                    const { argument } = rule;
                    let message = rule.rule(value, ...argument );
                    if(message){
                        newErrors.push(message);
                    }
                }else {
                    let message = rule(value);
                    if(message){
                        newErrors.push(message);
                    }
                }
            })
            if(newErrors.length){
                setErrors(newErrors);
            }else {
                setErrors([]);
            }
        }
    }

    const bindInput = {
        ...arg,
        value,
        type,
        onChange: e => setValue(e.target.value),
        onBlur: e => sanitizeValueWithValidations(e.target.value)
    }

    const clearInput = () => setValue(initialState);

    return [ value, bindInput, errors, clearInput];
}

export default useInputHandler;
