import { regExpName, regExp_mail, regExp_password, formInputInvalid } from './const';


// validate para el registro y login

export const validate = (input, error) => {
    if (regExpName.test(input.name)) error.name = "";
    else error.name = "*Solo letras y la primera en mayúscula.";

    if (regExpName.test(input.last_name)) error.last_name = "";
    else error.last_name = "*Solo letras y la primera en mayúscula.";

    if (!regExp_mail.test(input.mail)) error.mail = "*El mail no cumple con el formato estipulado.";
    else error.mail = "";

    if (!regExp_password.test(input.password)) error.password = "*La contraseña debe tener entre 8 y 16 caracteres, una mayuscula, una minuscula, un numero.";
    else error.password = "";

    if (!regExp_password.test(input.confirmPassword)) error.confirmPassword = "*La contraseña debe tener entre 8 y 16 caracteres, una mayuscula, una minuscula, un numero.";
    else error.confirmPassword = "";

    if (input.password != input.confirmPassword) error.passNoMatch = "*Las contraseñas no coinciden.";
    else error.passNoMatch = "";

    return error;
};

export const styleInput = (error, style) => {
    if (error.name) style.name = formInputInvalid;
    else style.name = "";

    if (error.last_name) style.last_name = formInputInvalid;
    else style.last_name = "";

    if (error.mail) style.mail = formInputInvalid;
    else style.mail = "";

    if (error.password) style.password = formInputInvalid;
    else style.password = "";

    if (error.confirmPassword) style.confirmPassword = formInputInvalid;
    else style.confirmPassword = "";

    return style;
};

// validate para el envio de los lugares

export const validatePlace = (input, error) => {
    if (input.name == '') error.name = '*Por favor complete este campo.';
    else error.name = '';

    if (input.adress == '') error.adress = '*Por favor ingrese una dirección.';
    else error.adress = '';

    if (!regExpName.test(input.theme)) error.theme = '*Solo debe contener letras.';
    else error.theme = '';

    return error;
};

export const styleInputPlace = (error, style) => {
    if (error.name) style.name = formInputInvalid;
    else style.name = '';

    if (error.adress) style.adress = formInputInvalid;
    else style.adress = '';

    if (error.theme) style.theme = formInputInvalid;
    else style.theme = '';

    return style
}