export const required = (value) => {
    if(!value || !value.toString().trim().length){
        return "Required, value can not be empty"
    }
    return null;
}

export const emailAddress = (value) => {
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validation = regexEmail.test(String(value).toLowerCase());
    if(!validation){
        return `${value} is not a valid email`
    }
    return null;
}

export const number = (value) => {
    if(!Number.isInteger(parseInt(value))){
        return `filed value is not a number` 
    }
};

export const lt = (value, maxLength) => {
    if(value.toString().trim().length > maxLength){
        return `The value exceeded ${maxLength} symbols.`
    }
    return null;
}

export const st = (value, minLength) => {
    if(value.toString().trim().length < minLength){
        return `feild can required minimum ${minLength} charactors.`
    }
    return null;
}